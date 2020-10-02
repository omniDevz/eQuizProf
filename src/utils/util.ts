const util = {
  onlyNumbers: (value: string) => {
    return value.replace(/\D/g, '');
  },
  removeHoursDateTimeApi: (value: string) => {
    return value.replace('T00:00:00', '');
  },
};

export default util;
