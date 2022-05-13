function criaP() {
  p = document.createElement('p')
  return p
}

function insertP(msg) {
  const resultado = document.querySelector('#container')
  resultado.innerHTML = ''

  const p = criaP()
  p.innerHTML = msg
  resultado.appendChild(p)
}

function data() {
  const data = new Date()
  let dia = data.getDay() + 1
  let mes = data.getMonth() + 1
  let ano = data.getFullYear()
  let hora = data.getHours()
  let minuto = data.getMinutes()

  const msg = `Hoje é ${diaSemana(dia)},  ${dia} de ${numMes(
    mes
  )} de ${ano} ${hora}: ${minuto} `
  console.log(msg)
  insertP(msg)
}

function diaSemana(dia) {
  let diaSemana = ''
  switch (dia) {
    case 1:
      diaSemana = 'Domingo'
      return diaSemana
    case 2:
      diaSemana = 'Segunda-feira'
      return diaSemana
    case 3:
      diaSemana = 'Terça-feira'
      return diaSemana
    case 4:
      diaSemana = 'Quarta-feira'
      return diaSemana
    case 5:
      diaSemana = 'Quinta-feira'
      return diaSemana
    case 6:
      diaSemana = 'Sexta-feira'
      return diaSemana
    case 7:
      diaSemana = 'Sábado'
      return diaSemana
  }
}

function numMes(mes) {
  let num = ''
  switch (mes) {
    case 1:
      num = 'Janeiro'
      return num

    case 2:
      num = 'Fevereiro'
      return num
    case 3:
      num = 'Março'
      return num
    case 4:
      num = 'Abril'
      return num
    case 5:
      num = 'Maio'
      return num
    case 6:
      num = 'Junho'
      return num
    case 7:
      num = 'Julho'
      return num
    case 8:
      num = 'agosto'
      return num
    case 9:
      num = 'Setembro'
      return num
    case 10:
      num = 'Outubro'
      return num
    case 11:
      num = 'Novembro'
      return num
    case 12:
      num = 'Dezembro'
      return num
  }
}

data()
