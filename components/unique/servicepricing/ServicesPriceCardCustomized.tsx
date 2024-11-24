import React from "react";
// Define the ServiceDetail interface
interface ServiceDetail {
  services: string;
}

// Define the Service interface
interface Service {
  servicesName: string | null;
  serviceDetails: string | null;
  unitPrice: number | null;
  quantity: number | null;
  estimatedTotalPrice: number | null;
}
interface Props {
  handleQuantityChange: (serviceIndex: number, newQuantity: string) => void;
  pricingList: Service[];
  totalPrice: number | null; // Assuming totalPrice is a number or null
}

const ServicesPriceCardCustomized: React.FC<Props> = ({
  // handleQuantityChange,
  pricingList,
  totalPrice,
}) => {
  return (
    <div>
      {pricingList.map((service, serviceIndex) => (
        <div className="p-4 mb-3 rounded-lg bg-orange-50" key={serviceIndex}>
          <p className="mt-1 mb-4">{service?.servicesName}</p>
          <div>
            <div className="relative w-full overflow-x-auto">
              <table className="w-full text-sm text-left text-primary">
                <thead className="text-[9px] uppercase gray-700 ">
                  <tr>
                    <th scope="col" className="px-1 py-3">
                      Service Name
                    </th>
                    <th scope="col" className="px-1 py-3">
                      Service Details
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      U.Price
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      QT
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      E.T.P
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[12px]">
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-xl space-y-2 list-disc">
                          <li className="text-[8px] text-black">
                            {service?.servicesName}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-xl space-y-2 list-none">
                          <li className="text-[8px] text-black">
                            {service.serviceDetails}fdgfdgfgdf
                          </li>
                        </ul>
                      </div>
                    </td>

                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-xl space-y-4 list-none list-inside">
                          <li className={`text-center text-[8px]`}>
                            {service.unitPrice}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-md space-y-2 list-none">
                          <li className="">
                            <input
                              type="number"
                              // value={service?.quantity}
                              // onChange={(e) =>
                              //   handleQuantityChange(
                              //     serviceIndex,
                              //     detailIndex,
                              //     e.target.value
                              //   )
                              // }
                              className="text-center text-black border border-gray-300 rounded-md w-14 text-[8px]"
                            />
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-md space-y-4 font-bold list-none">
                          <li className={`text-center text-[8px] `}>
                            {service.estimatedTotalPrice}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-end pr-16 bg-orange-50 gap-x-10">
        <p className="px-6 py-4 text-[10px] font-semibold ">Total</p>
        <p className="px-6 py-4 text-[10px] font-semibold">${totalPrice}</p>
      </div>
    </div>
  );
};

export default ServicesPriceCardCustomized;
