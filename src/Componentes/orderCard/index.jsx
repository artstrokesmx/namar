import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ id, titulo, imageUrl, precio, borrarDeCarrito }) => {

    let renderXMarkIcon
    
    if(borrarDeCarrito) {
        renderXMarkIcon = <XMarkIcon onClick={()=>borrarDeCarrito(id)} className='h-6 w-6 text-black cursor-pointer'/>
    }
    
    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={titulo} />
                </figure>
                <p className='text-sm font-light'>{titulo}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${precio}</p>
                
            </div>
            {renderXMarkIcon}
        </div>
    );
};

export default OrderCard;
