document.addEventListener("DOMContentLoaded", function () {
  const kotaTujuan = document.getElementById("kotaTujuan");
  const kotaAsal = document.getElementById("kotaAsal");
  const harga = document.getElementById("harga");
  const jumlahOrang = document.getElementById("jumlahOrang");
  const penumpangContainer = document.getElementById("penumpangContainer");
  const jadwalKeberangkatan = document.getElementById("jadwalKeberangkatan");
  const totalBiaya = document.getElementById("totalBiaya");
  const voucherInput = document.getElementById("voucher");

  const hargaMap = {
    "Tarakan-Tanjung Selor": 145000,
    "Tarakan-Kabupaten Tana Tidung": 180000,
    "Tarakan-Malinau": 210000,
    "Tarakan-Nunukan": 235000,
    "Tanjung Selor-Nunukan": 380000,
  };

  const schedules = {
    "Tarakan-Tanjung Selor": generateSchedule("06:50", 30, "15:50", "16:10"),
    "Tanjung Selor-Tarakan": generateSchedule("06:50", 30, "15:50", "16:10"),
    "Tarakan-Kabupaten Tana Tidung": generateSchedule("07:30", 60, "15:30"),
    "Kabupaten Tana Tidung-Tarakan": generateSchedule("07:30", 60, "15:30"),
    "Tarakan-Malinau": generateSchedule("07:45", 60, "15:45"),
    "Malinau-Tarakan": generateSchedule("07:45", 60, "15:45"),
    "Tarakan-Nunukan": ["08:35", "09:50", "10:45", "12:35", "13:55", "15:00"],
    "Nunukan-Tarakan": ["08:35", "09:50", "10:45", "12:35", "13:55", "15:00"],
    "Tanjung Selor-Nunukan": [
      "06:50",
      "08:20",
      "09:20",
      "10:50",
      "12:00",
      "13:20",
    ],
    "Nunukan-Tanjung Selor": [
      "06:50",
      "08:20",
      "09:20",
      "10:50",
      "12:00",
      "13:20",
    ],
  };

  // Function to update harga based on selected kotaTujuan and kotaAsal
  function updateHarga() {
    const tujuan = kotaTujuan.value;
    const asal = kotaAsal.value;
    const key = `${asal}-${tujuan}`;
    const reverseKey = `${tujuan}-${asal}`;
    if (hargaMap[key] || hargaMap[reverseKey]) {
      harga.value = `Rp ${hargaMap[key] || hargaMap[reverseKey]}`;
    } else {
      harga.value = "Maaf, rute anda belum tersedia";
    }
  }

  // Function to update list of Penumpang inputs based on jumlahOrang
  function updatePenumpangInputs() {
    const count = parseInt(jumlahOrang.value, 10) || 0;
    penumpangContainer.innerHTML = "";
    for (let i = 1; i <= count; i++) {
      const div = document.createElement("div");
      div.className = "form-group";
      div.innerHTML = `
            <label for="penumpang${i}">Nama Penumpang ${i}</label>
            <input type="text" class="form-control" id="penumpang${i}" placeholder="Penumpang ${i}">
        `;
      penumpangContainer.appendChild(div);
    }
  }

  // Function to generate schedules
  function generateSchedule(
    startTime,
    intervalMinutes,
    endTime,
    lastDeparture
  ) {
    const schedule = [];
    let [startHour, startMinutes] = startTime.split(":").map(Number);
    const [endHour, endMinutes] = endTime.split(":").map(Number);

    while (
      startHour < endHour ||
      (startHour === endHour && startMinutes <= endMinutes)
    ) {
      schedule.push(
        `${String(startHour).padStart(2, "0")}:${String(startMinutes).padStart(
          2,
          "0"
        )}`
      );
      startMinutes += intervalMinutes;
      if (startMinutes >= 60) {
        startMinutes -= 60;
        startHour += 1;
      }
    }
    if (lastDeparture) {
      schedule.push(lastDeparture);
    }
    return schedule;
  }

  // Function to update jadwalKeberangkatan options based on selected kotaTujuan and kotaAsal
  function updateJadwal() {
    const tujuan = kotaTujuan.value;
    const asal = kotaAsal.value;
    jadwalKeberangkatan.innerHTML =
      '<option value="">Pilih Jadwal Keberangkatan</option>';
    if (asal && tujuan) {
      const key = `${asal}-${tujuan}`;
      const reverseKey = `${tujuan}-${asal}`;
      const schedule = schedules[key] || schedules[reverseKey];
      if (schedule) {
        schedule.forEach((time) => {
          const option = document.createElement("option");
          option.value = time;
          option.textContent = time;
          jadwalKeberangkatan.appendChild(option);
        });
      }
    }
  }

  // Event listener for changes in kotaTujuan and kotaAsal
  kotaTujuan.addEventListener("change", updateJadwal);
  kotaAsal.addEventListener("change", updateJadwal);

  //   function updateJadwal() {
  //     const tujuan = kotaTujuan.value;
  //     const asal = kotaAsal.value;
  //     jadwalKeberangkatan.innerHTML =
  //       '<option value="">Pilih Jadwal Keberangkatan</option>';
  //     if (asal && tujuan) {
  //       // Add dummy schedules for now
  //       jadwalKeberangkatan.innerHTML += `
  //             <option value="08:00">08:00</option>
  //             <option value="12:00">12:00</option>
  //             <option value="16:00">16:00</option>
  //         `;
  //     }
  //   }

  // Function to update totalBiaya based on harga and jumlahOrang, applying voucher if valid
  function updateTotalBiaya() {
    const hargaValue = parseInt(harga.value.replace(/[^0-9]/g, ""), 10) || 0;
    const jumlahOrangValue = parseInt(jumlahOrang.value, 10) || 0;
    let total = hargaValue * jumlahOrangValue;

    // Check if voucher input is valid and reduce total by Rp 20,000
    const voucherCode = voucherInput.value.trim();
    if (voucherCode === "AYONYEBRANG") {
      total -= 20000;
    }

    if (hargaValue && jumlahOrangValue) {
      totalBiaya.value = `Rp ${total}`;
    } else {
      totalBiaya.value = "Maaf, terjadi kesalahan. Mohon cek rute anda.";
    }
  }

  // Event listeners for changes in kotaTujuan, kotaAsal, jumlahOrang, and voucherInput
  kotaTujuan.addEventListener("change", function () {
    updateHarga();
    updateJadwal();
    updateTotalBiaya();
  });

  kotaAsal.addEventListener("change", function () {
    updateHarga();
    updateJadwal();
    updateTotalBiaya();
  });

  jumlahOrang.addEventListener("change", function () {
    updatePenumpangInputs();
    updateTotalBiaya();
  });

  voucherInput.addEventListener("input", function () {
    updateTotalBiaya();
  });

  // Form submission handler
  document
    .getElementById("pemesananForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      updateTotalBiaya();
      window.location.href =
        "http://127.0.0.1:5500/Milestones/skeleton/index.html#";
    });

  // Initial updates
  updateHarga();
  updateJadwal();
  updatePenumpangInputs();
});
