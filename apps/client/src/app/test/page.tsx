import { auth } from "@clerk/nextjs/server";


const TestPage = async () => {
    const {getToken} = await auth();
    const token = await getToken();

    // console.log(token);
    // const res = await fetch("http://localhost:8000/test");
    // const data = await res.json();

    const resProduct = await fetch("http://localhost:8000/test",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    });
    const dataProduct = await resProduct.json();
    console.log(dataProduct);   
    
    const resOrder = await fetch("http://localhost:8001/test",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    });
    const dataOrder = await resOrder.json();
    console.log(dataOrder);   

    const resPayment = await fetch("http://localhost:8002/test",{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    });
    const dataPayment = await resPayment.json();
    console.log(dataPayment);   
    

  return (
    <div>
      TESTPAGE
    </div>
  )
}

export default TestPage;
