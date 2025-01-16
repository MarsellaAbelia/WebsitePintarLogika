function performLogic() {
    const p = parseFloat(document.getElementById('p').value);
    const q = parseFloat(document.getElementById('q').value);

    const p_bool = (p > 1);
    const q_bool = (q < 1);

    const konjungsi = p_bool && q_bool;
    const disjungsi = p_bool || q_bool;
    const negasi_p = !p_bool;
    const negasi_q = !q_bool;
    const implikasi = !p_bool || q_bool;
    const biimplikasi = (p_bool === q_bool);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Hasil</h2>
        <p>Nilai p: ${p} ( ${p_bool ? "Benar" : "Salah"})</p>
        <p>Nilai q: ${q} ( ${q_bool ? "Benar" : "Salah"})</p>
        <p>Konjungsi (p ∧ q): ${konjungsi ? "Benar" : "Salah"}</p>
        <p>Disjungsi (p ∨ q): ${disjungsi ? "Benar" : "Salah"}</p>
        <p>Negasi p (~p): ${negasi_p ? "Benar" : "Salah"}</p>
        <p>Negasi q (~q): ${negasi_q ? "Benar" : "Salah"}</p>
        <p>Implikasi (p → q): ${implikasi ? "Benar" : "Salah"}</p>
        <p>Biimplikasi (p ⇔ q): ${biimplikasi ? "Benar" : "Salah"}</p>
    `;
}