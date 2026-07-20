import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-primary py-20 flex flex-col gap-6 items-center justify-center md:rounded-2xl">
      <div>
        <h2 className="text-white text-center mb-5">Siap Untuk Memulai Karier Impian?</h2>
        <p className="text-subtitle text-center px-4">
          Bergabunglah dengan ribuan profesional yang telah meningkatkan skill
          mereka melalui kurikulum terbaik kami.
        </p>
      </div>
      <div className="flex gap-4">
        <Button
          LinkComponent={Link}
          to="/register"
          variant="contained"
          sx={{
            color: "#ffffff",
            fontSize: "12px",
            fontFamily: '"Poppins", sans-serif',
            borderRadius: "8px",
            backgroundColor: "#4B41E1",
          }}
        >
          Daftar Akun Gratis
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
