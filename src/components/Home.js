import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap';
import { productService } from '../API/services/productService';
import Banner from './layouts/banner/Banner'

function Home() {
  const [productsData, setProductsData] = useState();

  const getData = useCallback(() => {
    productService.getProducts().then((res) => {
      setProductsData(res.data);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className='container'>
       <Banner title={"Home"}/>
     <div className='row justify-content-center'> 
     {productsData?.map(({id, color }) => (
          <Card key={id} className="col-2" style={{border:0}}>
            <CardBody >
              <div
                style={{ backgroundColor: color, height:"150px", borderRadius:"50%"}}
              ></div>
            </CardBody>
          </Card>
        ))}
     </div>
    </div>
  )
}

export default Home