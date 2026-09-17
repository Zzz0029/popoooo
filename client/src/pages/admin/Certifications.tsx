import AdminTable from '../../components/admin/AdminTable';

export default function Certifications() {
  const columns = [
    { key: 'name', label: 'Certification Name' },
    { key: 'issuer', label: 'Issuer' },
    { key: 'visibility', label: 'Visibility' },
  ];
  return <AdminTable endpoint="/certifications" title="Certifications" columns={columns} />;
}
