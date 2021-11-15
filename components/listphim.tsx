import React,{FC,SyntheticEvent } from "react"
import Image from 'next/image'
type Phim = {
    thumnail: string
    id: string
}
interface props{
    title?:string
    listPhim?:Phim[]
}
const ListPhim:FC<props> = ({title,listPhim})=>{
    const onErr = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        const img = e.target as HTMLImageElement
    
        img.setAttribute('disabled', 'true')
        img.setAttribute('srcset', 'https://via.placeholder.com/205x105?text=error')
        img.setAttribute('src', 'https://via.placeholder.com/205x105?text=error')
      }
    const onHoverScale = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,id:string) =>{
        const clientX = e.clientX
        const windowWidth = window.innerWidth; 
        
        const elScale = document.getElementById(id);
        const style = elScale?.style
        if(style){
            style.zIndex = '40'
            if(clientX < 259){
                style.transform= ("scale(2.5,2.5) translateX(50px)");
                return
            }
            if(windowWidth - clientX < 259 ){
                style.transform= ("scale(2.5,2.5) translateX(-50px)");
                return
            }
            style.transform= ("scale(2.5,2.5)");
        }
    }
    const onOutHoverScale = (e: React.MouseEvent<HTMLDivElement,MouseEvent>,id:string) =>{
        const elScale = document.getElementById(id);
        
        const style = elScale?.style
        if(style){
            style.transform= ("scale(1,1) translateX(0px)");
            style.zIndex = '1'

        }
    }
    return(
        <div className="py-[16px] relative">
            <p className="text-white text-[32px] mb-[16px]">
            {title}
            </p>
            <div className="flex">
            {
                listPhim && listPhim.length > 0 ? listPhim.map((val)=>{
                    return(
                        <div id={val.id} key = {val.id} onMouseLeave={(e)=>{onOutHoverScale(e,val.id)}} onMouseEnter={(e)=>{onHoverScale(e,val.id)}} className="hover:z-40 transition-all relative duration-300 mx-[5px] flex-shrink-0" >
                            <img className="w-[205px] h-[105px] object-cover"  onError={onErr} src={val.thumnail} />
                            <div  className="bg-black absolute " >

                            </div>
                    </div>
                    )
                }):Array.from(Array(10).keys()).map((val,index)=>{
                    return(
                        <div key = {index} className="mr-[10px] w-[205px] h-[105px]">
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListPhim