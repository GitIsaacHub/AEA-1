const fs = require('fs');

const crearalumne = (nom = 'no_name', hores = '0') => {
    let sortida = '';
    sortida = `Alumne: ${nom} :: Hores: ${hores}`;

    fs.writeFileSync('Alumne', sortida);
};


module.exports = {
    crearalumne,
};