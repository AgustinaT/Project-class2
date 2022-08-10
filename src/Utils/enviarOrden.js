import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../Firebase/config";
import swal from 'sweetalert';


const enviarOrden = (cart, order) => {
  const newOrder = order.items.map((customerOrder) => {
    const { stock, image, ...updateOrder } = customerOrder;
    return updateOrder;
  });

  order.items.splice(0, order.items.length);
  order.items.push(...newOrder);

  const batch = writeBatch(db);
  const outOfStock = [];

  cart.forEach((productInCart) => {
    getDoc(doc(db, "products", productInCart.id))
    .then(async (documentSnapshot) => {

        const prod = { ...documentSnapshot.data(), id: documentSnapshot.id };
        if (prod.stock >= productInCart.quantity) {

          batch.update(doc(db, "products", prod.id), {
            stock: prod.stock - productInCart.quantity,
          });
        } 
        else {
          outOfStock.push(prod);
        }
        alert("productos fuera de stock:");
        
      }
    );
  });

  (async () => {
    if (outOfStock.length === 0) {
      try {
        const reference = await addDoc(collection(db, "orders"), order);
        await batch.commit();
        swal({
        title: "Numero de orden:", 
        text: reference.id,
        icon:"success"});

          } catch (error) {
        alert("create order in firebase error: ", error.message);
      }
    } else {
      let msj = "";
      for (const product of outOfStock) {
        msj += product.title + " ";
      }
      swal("prods fuera de stock: ", msj);
    }
  })();
};

export default enviarOrden;
