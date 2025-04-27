import { BASE_URL } from '../../../apis/baseURL';

const BookedPackageCard = ({ item }) => {
  return (
    <div className="tw-mt-10 tw-w-5/12 tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden">
      <figure className="tw-relative">
        <img
          className="tw-w-full tw-h-64 tw-object-cover"
          src={`${BASE_URL}/${item?.packagePhoto}`}
          alt="Experience The Great Holiday On Beach"
          loading="lazy"
        />
      </figure>

      <div className="tw-p-6">
        <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
          {item?.packageName}
        </h3>

        <p className="tw-text-gray-600 tw-h-32 tw-overflow-y-auto tw-mb-4">
          {item?.packageDescription}
        </p>

        <ul className="tw-flex tw-flex-wrap tw-gap-4 tw-mb-6">
          <li className="tw-flex tw-items-center">
            <div className="tw-flex tw-items-center tw-text-gray-500">
              <ion-icon name="time" className="tw-mr-2"></ion-icon>
              <p className="tw-text-sm tw-mb-0">
                {item?.days}D/{item?.nights}N
              </p>
            </div>
          </li>

          <li className="tw-flex tw-items-center">
            <div className="tw-flex tw-items-center tw-text-gray-500">
              <ion-icon name="people" className="tw-mr-2"></ion-icon>
              <p className="tw-text-sm tw-mb-0">TAS: {item?.totalAvailableSeats}</p>
            </div>
          </li>

          <li className="tw-flex tw-items-center">
            <div className="tw-flex tw-items-center tw-text-gray-500">
              <ion-icon name="location" className="tw-mr-2"></ion-icon>
              <p className="tw-text-sm tw-mb-0">{item?.startingDate}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="tw-bg-gray-50 tw-p-4 tw-border-t tw-flex tw-flex-col tw-items-center">
        <div className="tw-flex tw-items-center tw-mb-2">
          <p className="tw-text-sm tw-text-gray-500">({item?.review?.length || 0} reviews)</p>

          <div className="tw-flex tw-text-yellow-500 tw-ml-2">
            {[...Array(5)].map((_, index) => (
              <ion-icon key={index} name="star" className="tw-text-sm"></ion-icon>
            ))}
          </div>
        </div>

        <p className="tw-text-lg tw-font-bold tw-text-green-600">
          {item?.costPerHead}
          <span className="tw-text-sm tw-text-gray-500 tw-ml-2">Paid</span>
        </p>

        <div className="tw-mt-2 tw-text-sm tw-font-medium tw-text-green-700">
          Booked
        </div>
      </div>
    </div>
  );
};

export default BookedPackageCard;
