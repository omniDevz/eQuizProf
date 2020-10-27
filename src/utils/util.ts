const util = {
  onlyNumbers(value: string) {
    return value.replace(/\D/g, '');
  },
  removeHoursDateTimeApi(value: string) {
    return value.replace('T00:00:00', '');
  },
  includesToLowerCase(valueOne: string, valueTwo: string): boolean {
    return valueOne.toLowerCase().includes(valueTwo.toLowerCase());
  },
  includesToArray(values: string[], compare: string): boolean {
    for (const value of values) {
      if (util.includesToLowerCase(value, compare)) return true;
    }
    return false;
  },
  getFormatDate(value: string) {
    const date = new Date(util.removeHoursDateTimeApi(value));

    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);

    return `${day}/${month}/${date.getFullYear()}`;
  },
  removeUserAndTokenFrom() {
    localStorage.removeItem('@EQuiz:user');
    localStorage.removeItem('@EQuiz:token');
  },
  getDateAndHoursNow() {
    const date = new Date(Date.now());

    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear();

    const hour = `0${date.getHours() + 1}`.slice(-2);
    const min = `0${date.getMinutes() + 1}`.slice(-2);

    return `${year}-${month}-${day} ${hour}:${min}`;
  },
};

export default util;
