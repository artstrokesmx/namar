import {ChevronRightIcon} from '@heroicons/react/24/solid'

const OrdersCard = ({ precioTotal, productosTotales}) => {
    
    return (
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01.02.2023</span>
                    <span className="font-light">{productosTotales} productos</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className="font-medium text-2xl">$ {precioTotal}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </p>
                
            </div>
        </div>
    );
};

export default OrdersCard;
