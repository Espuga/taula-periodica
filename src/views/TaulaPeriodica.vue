<script setup>
import Element from './../components/Element.vue'

const elements = [
  { visible: true, classe: "1", simbol: 'H', atomicNumber: '1', name: 'Hirdogen' },
  { visible: false, classe: "16" },
  { visible: true, classe: "1", simbol: 'He', atomicNumber: '2', name: 'Heli' },

  { visible: true, classe: "1", simbol: 'Li', atomicNumber: '3', name: 'Liti' },
  { visible: true, classe: "1", simbol: 'Be', atomicNumber: '4', name: 'Neril·li' },
  { visible: false, classe: "10" },
  { visible: true, classe: "1", simbol: 'B', atomicNumber: '5', name: 'Bor' },
  { visible: true, classe: "1", simbol: 'C', atomicNumber: '6', name: 'Carboni' },
  { visible: true, classe: "1", simbol: 'N', atomicNumber: '7', name: 'Nitrogen' },
  { visible: true, classe: "1", simbol: 'O', atomicNumber: '8', name: 'Oxigen' },
  { visible: true, classe: "1", simbol: 'F', atomicNumber: '9', name: 'Fluor' },
  { visible: true, classe: "1", simbol: 'Ne', atomicNumber: '10', name: 'Neó' },

  { visible: true, classe: "1", simbol: 'Na', atomicNumber: '11', name: 'Sodi' },
  { visible: true, classe: "1", simbol: 'Mg', atomicNumber: '12', name: 'Magnesi' },
  { visible: false, classe: "10" },
  { visible: true, classe: "1", simbol: 'Al', atomicNumber: '13', name: 'Alumini' },
  { visible: true, classe: "1", simbol: 'Si', atomicNumber: '14', name: 'Silici' },
  { visible: true, classe: "1", simbol: 'P', atomicNumber: '15', name: 'Fòsfor' },
  { visible: true, classe: "1", simbol: 'S', atomicNumber: '16', name: 'Sofre' },
  { visible: true, classe: "1", simbol: 'Cl', atomicNumber: '17', name: 'Clor' },
  { visible: true, classe: "1", simbol: 'Ar', atomicNumber: '18', name: 'Argó' },
  

  { visible: true, classe: "1", simbol: 'K', atomicNumber: '19', name: 'Potassi' },
  { visible: true, classe: "1", simbol: 'Ca', atomicNumber: '20', name: 'Calci' },
  { visible: true, classe: "1", simbol: 'Sc', atomicNumber: '21', name: 'Escandium' },
  { visible: true, classe: "1", simbol: 'Ti', atomicNumber: '22', name: 'Titani' },
  { visible: true, classe: "1", simbol: 'V', atomicNumber: '23', name: 'Vanadi' },
  { visible: true, classe: "1", simbol: 'Cr', atomicNumber: '24', name: 'Crom' },
  { visible: true, classe: "1", simbol: 'Mn', atomicNumber: '25', name: 'Manganès' },
  { visible: true, classe: "1", simbol: 'Fe', atomicNumber: '26', name: 'Ferro' },
  { visible: true, classe: "1", simbol: 'Co', atomicNumber: '27', name: 'Cobalt' },
  { visible: true, classe: "1", simbol: 'Ni', atomicNumber: '28', name: 'Níquel' },
  { visible: true, classe: "1", simbol: 'Cu', atomicNumber: '29', name: 'Coure' },
  { visible: true, classe: "1", simbol: 'Zn', atomicNumber: '30', name: 'Zinc' },
  { visible: true, classe: "1", simbol: 'Ga', atomicNumber: '31', name: 'Gal·li' },
  { visible: true, classe: "1", simbol: 'Ge', atomicNumber: '32', name: 'Germani' },
  { visible: true, classe: "1", simbol: 'As', atomicNumber: '33', name: 'Arsènic' },
  { visible: true, classe: "1", simbol: 'Se', atomicNumber: '34', name: 'Seleni' },
  { visible: true, classe: "1", simbol: 'Br', atomicNumber: '35', name: 'Brom' },
  { visible: true, classe: "1", simbol: 'Kr', atomicNumber: '36', name: 'Krypton' },

  { visible: true, classe: "1", simbol: 'Rb', atomicNumber: '37', name: 'Rubidi' },
  { visible: true, classe: "1", simbol: 'Sr', atomicNumber: '38', name: 'Estronci' },
  { visible: true, classe: "1", simbol: 'Y', atomicNumber: '39', name: 'Itri' },
  { visible: true, classe: "1", simbol: 'Zr', atomicNumber: '40', name: 'Zirconi' },
  { visible: true, classe: "1", simbol: 'Nb', atomicNumber: '41', name: 'Niobi' },
  { visible: true, classe: "1", simbol: 'Mo', atomicNumber: '42', name: 'Molibdè' },
  { visible: true, classe: "1", simbol: 'Tc', atomicNumber: '43', name: 'Tecneci' },
  { visible: true, classe: "1", simbol: 'Ru', atomicNumber: '44', name: 'Ruteni' },
  { visible: true, classe: "1", simbol: 'Rh', atomicNumber: '45', name: 'Rodi' },
  { visible: true, classe: "1", simbol: 'Pd', atomicNumber: '46', name: 'Pal·ladi' },
  { visible: true, classe: "1", simbol: 'Ag', atomicNumber: '47', name: 'Plata' },
  { visible: true, classe: "1", simbol: 'Cd', atomicNumber: '48', name: 'Cadmium' },
  { visible: true, classe: "1", simbol: 'In', atomicNumber: '49', name: 'Indi' },
  { visible: true, classe: "1", simbol: 'Sn', atomicNumber: '50', name: 'Estany' },
  { visible: true, classe: "1", simbol: 'Sb', atomicNumber: '51', name: 'Antimoni' },
  { visible: true, classe: "1", simbol: 'Te', atomicNumber: '52', name: 'Tel·luri' },
  { visible: true, classe: "1", simbol: 'I', atomicNumber: '53', name: 'Iode' },
  { visible: true, classe: "1", simbol: 'Xe', atomicNumber: '54', name: 'Xenó' },

  { visible: true, classe: "1", simbol: 'Cs', atomicNumber: '55', name: 'Cesi' },
  { visible: true, classe: "1", simbol: 'Ba', atomicNumber: '56', name: 'Bari' },
  { visible: false, classe: "1" },
  { visible: true, classe: "1", simbol: 'Hf', atomicNumber: '72', name: 'Hafnium' },
  { visible: true, classe: "1", simbol: 'Ta', atomicNumber: '73', name: 'Tàntal' },
  { visible: true, classe: "1", simbol: 'W', atomicNumber: '74', name: 'Tungstè' },
  { visible: true, classe: "1", simbol: 'Re', atomicNumber: '75', name: 'Reni' },
  { visible: true, classe: "1", simbol: 'Os', atomicNumber: '76', name: 'Osmi' },
  { visible: true, classe: "1", simbol: 'Ir', atomicNumber: '77', name: 'Iridi' },
  { visible: true, classe: "1", simbol: 'Pt', atomicNumber: '78', name: 'Platí' },
  { visible: true, classe: "1", simbol: 'Au', atomicNumber: '79', name: 'Or' },
  { visible: true, classe: "1", simbol: 'Hg', atomicNumber: '80', name: 'Mercuri' },
  { visible: true, classe: "1", simbol: 'Tl', atomicNumber: '81', name: 'Tal·li' },
  { visible: true, classe: "1", simbol: 'Pb', atomicNumber: '82', name: 'Plom' },
  { visible: true, classe: "1", simbol: 'Bi', atomicNumber: '83', name: 'Bismut' },
  { visible: true, classe: "1", simbol: 'Po', atomicNumber: '84', name: 'Pol·loni' },
  { visible: true, classe: "1", simbol: 'At', atomicNumber: '85', name: 'Astat' },

  { visible: true, classe: "1", simbol: 'Rn', atomicNumber: '86', name: 'Radó' },
  { visible: true, classe: "1", simbol: 'Fr', atomicNumber: '87', name: 'Francium' },
  { visible: true, classe: "1", simbol: 'Ra', atomicNumber: '88', name: 'Radi' },
  { visible: false, classe: "1" },
  { visible: true, classe: "1", simbol: 'Rf', atomicNumber: '104', name: 'Rutherfordi' },
  { visible: true, classe: "1", simbol: 'Db', atomicNumber: '105', name: 'Dubni' },
  { visible: true, classe: "1", simbol: 'Sg', atomicNumber: '106', name: 'Seaborgi' },
  { visible: true, classe: "1", simbol: 'Bh', atomicNumber: '107', name: 'Bohri' },
  { visible: true, classe: "1", simbol: 'Hs', atomicNumber: '108', name: 'Hassi' },
  { visible: true, classe: "1", simbol: 'Mt', atomicNumber: '109', name: 'Meitneri' },
  { visible: true, classe: "1", simbol: 'Ds', atomicNumber: '110', name: 'Darmstadi' },
  { visible: true, classe: "1", simbol: 'Rg', atomicNumber: '111', name: 'Roentgeni' },
  { visible: true, classe: "1", simbol: 'Cn', atomicNumber: '112', name: 'Copernici' },
  { visible: true, classe: "1", simbol: 'Nh', atomicNumber: '113', name: 'Nihoni' },
  { visible: true, classe: "1", simbol: 'Fl', atomicNumber: '114', name: 'Flerovi' },
  { visible: true, classe: "1", simbol: 'Mc', atomicNumber: '115', name: 'Moscovi' },
  { visible: true, classe: "1", simbol: 'Lv', atomicNumber: '116', name: 'Livermori' },
  { visible: true, classe: "1", simbol: 'Ts', atomicNumber: '117', name: 'Tenesini' },
  { visible: true, classe: "1", simbol: 'Og', atomicNumber: '118', name: 'Oganesó' }


]

</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="w-full h-screen flex justify-center items-center">
    <div class="grid grid-cols-18 border-separate gap-1">

      <Element v-for="element in elements" :visible="element.visible" :classe="element.classe" :simbol="element.simbol" :atomicNumber="element.atomicNumber" :name="element.name"></Element>

    </div>
  </div>

</template>

<style scoped>
/* grid cols */
.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}

/* cols span */
.col-span-16 {
  grid-column: span 16 / span 16;
}
</style>
