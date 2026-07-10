const StatSection = () => {
    const stats = [
        {id: 1, value: "98%", label: "Tingkat kelulusan"},
        {id: 2, value: "100+", label: "Kursus tersertifikasi"},
        {id: 3, value: "150+", label: "Partner Institusi"},
        {id: 4, value: "24/7", label: "Dukungan pengguna"},
    ]

    return (
        <section className="w-full bg-primary text-white py-8">
            <div className="grid grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-2 items-center">
                        <span className="text-2xl md:text-3xl font-bold">
                            {stat.value}
                        </span>
                        <span className="text-subtitle text-center text-sm md:text-xl">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatSection;