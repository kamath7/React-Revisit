import { uiActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "Loading...",
          title: "Loading Data...",
          message: "Talking with the server!",
        })
      );
      const sendReq = async () => {
        const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`, {
          method: "PUT",
          body: JSON.stringify(cart),
        });
  
        if (!response.ok) {
          throw new Error("Error sending!");
        }
      };
      try {
        await sendReq();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Cart data sent successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Cart data failed to send",
          })
        );
      }
    };
  };

  export const fetchCartData = ()=>{
      return async (dispatch) => {
        const fetchData = async()=>{
            const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`)
            if(!response.ok){
                throw new Error('Could not fetch data!')
            }
            const data = await response.json()
            return data 
        }
        try {
          const cartData =  await fetchData()
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Cart data failed to fetch",
                })
              );
        }
      }
  }