import { GiGraduateCap } from "react-icons/gi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <div className="border border-t-neutral-400 border-b-transparent mb-16">
        <div className="text-center max-w-3xl mx-auto mt-20">
          <h1 className="text-primary text-3xl font-bold">Dashboard</h1>
          <p className="text-secondary text-sm">
            Selamat datang kembali di pusat pembelajaran Anda. Kelola kemajuan
            belajar Anda, akses kursus-kursus Anda, dan lanjutkan perjalanan
            akademik Anda.
          </p>
        </div>
        <div className="text-center max-w-130 md:max-w-3xl mx-auto mt-10 flex flex-col gap-6 border border-gray-300 rounded-xl p-6 shadow-xl mb-18">
          <GiGraduateCap
            className="bg-[#1A365D] rounded-full text-white mx-auto"
            size={36}
          />
          <h2 className="text-primary text-2xl font-bold">
            Selamat Datang di Dashboard Anda
          </h2>
          <p className="text-secondary text-sm">
            Ketelitian akademis Anda dimulai di sini. Anda tidak memiliki
            pemberitahuan yang tertunda atau tugas mendesak. Mulailah dengan
            menjelajahi katalog mata kuliah atau lanjutkan dari bagian terakhir
            yang Anda tinggalkan.
          </p>
          <Stack className="mx-auto">
            <Button
              LinkComponent={Link}
              to="/users"
              variant="contained"
              sx={{
                color: "#ffffff",
                fontSize: "14px",
                fontFamily: '"Poppins", sans-serif',
                borderRadius: "8px",
                backgroundColor: "var(--color-primary)",
              }}
            >
              Lihat Daftar Pengguna
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
