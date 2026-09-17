import AdminTable from '../../components/admin/AdminTable';

export default function Projects() {
  const columns = [
    { key: 'name', label: 'Project Name' },
    { key: 'technologies', label: 'Technologies' },
    { key: 'visibility', label: 'Visibility' },
  ];
  return <AdminTable endpoint="/projects" title="Projects" columns={columns} />;
}
