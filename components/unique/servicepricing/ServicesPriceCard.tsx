import React from "react";
import { InitialPricingList } from "./initialPricingList";

const ServicesPriceCard = () => {
  return (
    <div>
      {InitialPricingList.map((service, serviceIndex) => (
        <div className="p-4 mb-3 rounded-lg bg-orange-50" key={serviceIndex}>
          <h2 className="text-[12px] font-semibold text-primary">
            Service Name
          </h2>
          <p className="mt-1 mb-4">
            {service.servicesName.map((serviceName, detailIndex) => (
              <span
                key={detailIndex}
                className={`list-none  text-[9px] ${
                  serviceName.name !== null
                    ? "text-black"
                    : serviceIndex % 2 !== 0
                    ? "text-gray-200"
                    : "text-white"
                }`}
              >
                {serviceName.name}
              </span>
            ))}
          </p>
          <div>
            <div className="relative w-full overflow-x-auto">
              <table className="w-full text-sm text-left text-primary">
                <thead className="text-[9px] uppercase gray-700 ">
                  <tr>
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
                          {service.serviceDetails.map((items, i) => (
                            <li className="text-[8px] text-black" key={i}>
                              {items.services}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>

                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-xl space-y-4 list-none list-inside">
                          {service.unitPrice.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-[8px] ${
                                  serviceDetail.price !== null
                                    ? "text-black"
                                    : serviceIndex % 2 !== 0
                                    ? "text-gray-200"
                                    : "text-white"
                                }`}
                              >
                                {serviceDetail.price}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-md space-y-4 list-none">
                          {service.quantity.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-[8px] ${
                                  serviceDetail.quantitys !== null
                                    ? "text-black"
                                    : serviceIndex % 2 !== 0
                                    ? "text-gray-200"
                                    : "text-whitetext-gray-200"
                                }`}
                              >
                                {serviceDetail.quantitys}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div>
                        <ul className="max-w-md space-y-4 font-bold list-none">
                          {service.estimatedTotalPrice.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-[8px] ${
                                  serviceDetail.totalPrice !== null
                                    ? "text-black"
                                    : serviceIndex % 2 !== 0
                                    ? "text-gray-200"
                                    : "text-white"
                                }`}
                              >
                                {serviceDetail.totalPrice}
                              </li>
                            )
                          )}
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
        <p className="px-6 py-4 text-[10px] font-semibold">$1420</p>
      </div>
    </div>
  );
};

export default ServicesPriceCard;
