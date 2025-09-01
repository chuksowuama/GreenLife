import React, { useEffect, useState,useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProductCard2 from "../COMPONENTS/ProductCard2";
import ProductsCard from "../COMPONENTS/ProductsCard";
import Pagination from "../COMPONENTS/Pagination";
import { useMediaQuery } from "react-responsive";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import FilterbysideComponent from "../COMPONENTS/FilterbysideComponent";
import CartModal from "../COMPONENTS/CartModal";



const ProductGridComponent = ({ data }) => {
  const { proID } = useParams();
  const [displayData, setDisplayData] = useState([]);
  const[changeview,setchangeView]=useState(true)
  const GreenData = useSelector((state) => state.stored.items);
   const[cartModal,setCartModal]=useState(false)
   const[cartId,setCartID]=useState(null)
   const[modalMode,setModalmode]=useState(null)
  const[currentPage,setCurrentPage]=useState(1)
  const itemsperpage=8
   const mobile = useMediaQuery({ query: "(min-width:275px)" });
   const tablet = useMediaQuery({ query: "(min-width:635px)" });
   const laptop = useMediaQuery({ query: "(min-width:1200px)" });
  const[openFilterby,SetopenFilterby]=useState(false)


  // this function is used to display the modal that has info abbout the particular prodcut clicked
 function opencartModal(item){
  if(cartModal&& cartId.id===item){
     setCartModal(false)
     return
  }
    setCartID(item)
    setModalmode("cart")
    setCartModal(true)
 }

 function closeTheModal(){
  setCartModal(false)
 }
// ----------------------------------


 function expandProductModal(item){
  if(cartModal&& cartId.id===item){
    setCartModal(false)
    return
  }
   setCartID(item)
   setModalmode("expand")
   setCartModal(true)
 } 



  useEffect(()=>{
    if(cartModal&& modalMode==="cart" ){
      document.body.style.overflow="hidden"
    }else if(cartModal&&modalMode==="expand"){
      document.body.style.overflow="hidden"
    }else{
       document.body.style.overflow="auto"
    }
  },[cartModal])


   // this useeffect is used to filter the data  based on the proID or data passed
  useEffect(() => {
    if (data && data.length > 0) {
      setDisplayData(data);
      return;
    }
    if (proID) {
      const filteredData = GreenData.filter(
        (item) => item.category.toLowerCase() === proID.toLowerCase()||
        item.subcategory.toLowerCase() === proID.toLowerCase()
      );
      setDisplayData(filteredData);
      return;
    }
    setDisplayData(GreenData || []);
  }, [data, proID, GreenData]);
    
  //  this is for the pagination
   const totalPage=Math.ceil(displayData.length/itemsperpage)
   const lastPage=currentPage * itemsperpage
   const firstPage=lastPage-itemsperpage
   const ProductstoDisplay=displayData.slice(firstPage,lastPage)
  
  // this function is used to open the side filter when on small screen
   function opensidefilter(){
    SetopenFilterby(true)
   }

  // this function is used to close the side filter that is active when on small scrren
   function Closesidefilter(){
    SetopenFilterby(false)
   }


  return (
    <>
      <div className="sm:mt-34 md:mt-40 ">
        <div className="grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">

          {/* aside that contains filter and banner  */}
          <div className="sm:order-2 lg:order-1 w-full">
           {laptop &&  <FilterbysideComponent/>}
            <SideFilterComponent/>
          </div>

          {/* main product grid */}
          <div className="md:col-span-4 sm:order-1 lg:order-2  space-y-3">
            <h3 className="text-[1.2rem]">{proID}</h3>
            <hr className='mb-1.5 text-gray-400 p-0.5 w-auto mx-auto' />
            <div>
              <p className="text-[1rem] text-gray-500">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham classical
                literature, discovered the undoubtable source.
              </p>
              <div className="space-x-3 mt-1.5">
                {!laptop&&<span onClick={opensidefilter} className="border px-10 py-1 bg-primary text-secondary font-semibold cursor-pointer">filter</span>}
                <span className="cursor-pointer text-primary">{laptop?<i class="fa-solid fa-list" onClick={()=>setchangeView(!changeview)}></i>:null}</span>
                <span className="font-semibold">There are {displayData.length} Products</span>
              </div>
            </div>
            <div className={`grid ${changeview?" sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3":" sm:grid-cols-2 lg:grid-cols-1 sm:px- md:px-2"} gap-3 `}>
              {
                displayData&&ProductstoDisplay.map(item=>(
                  <div>
                    {
                     <ProductCard2 item={item} changeview={changeview} openCartModal={opencartModal} expandProductModal={expandProductModal} />
                    }
                  </div>
                ))
              }
            </div>
           <div className="mt-10 flex
            justify-center">
             <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            onChangePage={(page)=>setCurrentPage(page)}
            
            />
           </div>
          </div>
        </div>
      </div>
      {!laptop&&openFilterby&& <div className="border w-1/2 bg-secondary fixed top-31 h-full">{ <FilterbysideComponent closeFilterby={Closesidefilter} /> }</div> }
      {cartModal&& 
       <CartModal closeTheModal={closeTheModal} itemID={cartId} mode={modalMode}/>}
    </>
  );
};

export default ProductGridComponent;