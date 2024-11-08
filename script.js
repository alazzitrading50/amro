const data = [
    { amount: 50, deduct3: 47, deduct5: 42, deduct7: 35, rial535: 18725, rial527: 18445, diff: -280, rial7: 3745, finalAmount: 4025 },
    { amount: 60, deduct3: 57, deduct5: 52, deduct7: 45, rial535: 22470, rial527: 23055, diff: -585, rial7: 3745, finalAmount: 4330 },
    { amount: 70, deduct3: 67, deduct5: 62, deduct7: 55, rial535: 26775, rial527: 26845, diff: -730, rial7: 3745, finalAmount: 4015 },
    { amount: 80, deduct3: 77, deduct5: 72, deduct7: 65, rial535: 34825, rial527: 34945, diff: -820, rial7: 3745, finalAmount: 4565 },
    { amount: 90, deduct3: 87, deduct5: 82, deduct7: 75, rial535: 41025, rial527: 40550, diff: -915, rial7: 3745, finalAmount: 4725 },
    { amount: 100, deduct3: 97, deduct5: 92, deduct7: 85, rial535: 44725, rial527: 44235, diff: -1010, rial7: 3745, finalAmount: 4735 },
    { amount: 110, deduct3: 107, deduct5: 102, deduct7: 95, rial535: 52275, rial527: 50255, diff: -1025, rial7: 3745, finalAmount: 5215 },
    { amount: 120, deduct3: 117, deduct5: 112, deduct7: 105, rial535: 57115, rial527: 56465, diff: -1150, rial7: 3745, finalAmount: 5395 },
    { amount: 130, deduct3: 127, deduct5: 122, deduct7: 115, rial535: 62175, rial527: 60345, diff: -1305, rial7: 3745, finalAmount: 5420 },
    { amount: 140, deduct3: 137, deduct5: 132, deduct7: 125, rial535: 67075, rial527: 65235, diff: -1345, rial7: 3745, finalAmount: 5400 },
    { amount: 150, deduct3: 147, deduct5: 142, deduct7: 135, rial535: 72325, rial527: 70135, diff: -1500, rial7: 3745, finalAmount: 5245 },
    { amount: 160, deduct3: 157, deduct5: 152, deduct7: 145, rial535: 77465, rial527: 76285, diff: -1680, rial7: 3745, finalAmount: 5575 },
    { amount: 170, deduct3: 167, deduct5: 162, deduct7: 155, rial535: 82615, rial527: 81215, diff: -1745, rial7: 3745, finalAmount: 5885 },
    { amount: 180, deduct3: 177, deduct5: 172, deduct7: 165, rial535: 87765, rial527: 86045, diff: -1780, rial7: 3745, finalAmount: 6095 },
    { amount: 190, deduct3: 187, deduct5: 182, deduct7: 175, rial535: 92915, rial527: 91275, diff: -1840, rial7: 3745, finalAmount: 6305 },
    { amount: 200, deduct3: 197, deduct5: 192, deduct7: 185, rial535: 98065, rial527: 96355, diff: -1895, rial7: 3745, finalAmount: 6500 }
];

const tableBody = document.querySelector("table tbody");

data.forEach(item => {
    const row = document.createElement("tr");

    Object.values(item).forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
});
