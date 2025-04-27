import { Mail, Phone, Building2, Calendar } from 'lucide-react';

export default function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="tw-flex tw-items-center tw-space-x-3">
      <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10">
        <Icon className="tw-w-5 tw-h-5 tw-text-primary" />
      </div>
      <div>
        <p className="tw-text-sm tw-text-gray-500">{label}</p>
        <p className="tw-text-gray-900">{value}</p>
      </div>
    </div>
  );
}