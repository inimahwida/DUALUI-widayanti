import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <Head>
        <title>Tabel Data Mahasiswa</title>
        <meta name="description" content="Tabel Mahasiswa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="text-2xl font-semibold text-center mb-5">Tabel Data Mahasiswa</h2>

      {/* Tabel untuk desktop */}
      <div className="hidden md:block">
        <table className="min-w-full table-auto bg-white border-collapse border border-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">NIM</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Gender</th>
              <th className="px-4 py-2 border border-gray-300">Prodi</th>
              <th className="px-4 py-2 border border-gray-300">Kelas</th>
              <th className="px-4 py-2 border border-gray-300">Semester</th>
              <th className="px-4 py-2 border border-gray-300">Alamat</th>
              <th className="px-4 py-2 border border-gray-300">Hobby</th>
              <th className="px-4 py-2 border border-gray-300">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {/* Data Mahasiswa 1 - 10 */}
            {[
              { no: 1, nim: '123456789', nama: 'Widayanti Abigail', gender: 'Perempuan', prodi: 'Informatika', kelas: 'A', semester: 4, alamat: 'Jalkan Jakarta No. 1234', hobby: 'Bermain Game', cita_cita: 'Dokter' },
              { no: 2, nim: '987654321', nama: 'Gabriela Abigail', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 4, alamat: 'Jalkan Bandung No. 1234', hobby: 'Fotografi', cita_cita: 'Penyanyi' },
              { no: 3, nim: '987654321', nama: 'Hilary Abigail', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 4, alamat: 'Jalkan Sejahtera No. 1234', hobby: 'Berenang', cita_cita: 'Penari' },
              { no: 4, nim: '987654345', nama: 'Abigail Rachel', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 6, alamat: 'Jalkan Ahmad Yani. 1234', hobby: 'Membaca', cita_cita: 'Lawyer' },
            ].map((mahasiswa) => (
              <tr key={mahasiswa.no} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.no}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.nim}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.nama}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.gender}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.prodi}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.kelas}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.semester}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.alamat}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.hobby}</td>
                <td className="px-4 py-2 border border-gray-300">{mahasiswa.cita_cita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Mobile */}
      <div className="md:hidden">
        {[
          { no: 1, nim: '123456789', nama: 'Widayanti Abigail', gender: 'Perempuan', prodi: 'Informatika', kelas: 'A', semester: 4, alamat: 'Jalkan Jakarta No. 1234', hobby: 'Bermain Game', cita_cita: 'Dokter' },
          { no: 2, nim: '987654321', nama: 'Gabriela Abigail', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 4, alamat: 'Jalkan Bandung No. 1234', hobby: 'Fotografi', cita_cita: 'Penyanyi' },
          { no: 3, nim: '987654321', nama: 'Hilary Abigail', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 4, alamat: 'Jalkan Sejahtera No. 1234', hobby: 'Berenang', cita_cita: 'Penari' },
          { no: 4, nim: '987654345', nama: 'Abigail Rachel', gender: 'Perempuan', prodi: 'Desain Grafis', kelas: 'B', semester: 6, alamat: 'Jalkan Ahmad Yani. 1234', hobby: 'Membaca', cita_cita: 'Lawyer' },
          
        ].map((mahasiswa) => (
          <div key={mahasiswa.no} className="mb-5 p-5 border border-gray-300 rounded-md shadow-md">
            <h3 className="font-semibold text-xl">{mahasiswa.nama}</h3>
            <p><strong>No:</strong> {mahasiswa.no}</p>
            <p><strong>NIM:</strong> {mahasiswa.nim}</p>
            <p><strong>Gender:</strong> {mahasiswa.gender}</p>
            <p><strong>Prodi:</strong> {mahasiswa.prodi}</p>
            <p><strong>Kelas:</strong> {mahasiswa.kelas}</p>
            <p><strong>Semester:</strong> {mahasiswa.semester}</p>
            <p><strong>Alamat:</strong> {mahasiswa.alamat}</p>
            <p><strong>Hobby:</strong> {mahasiswa.hobby}</p>
            <p><strong>Cita-cita:</strong> {mahasiswa.cita_cita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}