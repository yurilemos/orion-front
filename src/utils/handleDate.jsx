import moment from 'moment';

/* Funções para tratar as datas recebidas pela API */
export const dateHandlingWithoutMinutes = (date) => {
  if (date) {
    const formattedDate = moment(date).format('DD/MM/YYYY');
    const nowDate = Date.now();
    const year = moment(date).format('YYYY') === moment(nowDate).format('YYYY');
    const month = moment(date).format('MM') === moment(nowDate).format('MM');
    const day = moment(date).format('DD') === moment(nowDate).format('DD');
    if (year && month && day) {
      const hour = moment(date).format('HH');
      const minutes = moment(date).format('mm');
      if (hour === moment(date).format('HH')) {
        const diffM = Math.abs(
          parseInt(minutes) - parseInt(moment(nowDate).format('mm'))
        );

        if (diffM === 0) {
          return 'agora';
        }
        return `${diffM} min atrás`;
      }
      const diffH = Math.abs(
        parseInt(moment(nowDate).format('HH')) - parseInt(hour)
      );
      return `${diffH} hora${diffH > 1 && 's'} atrás`;
    }
    return formattedDate;
  }
  return null;
};

export const dateHandlingWithMinutes = (date) => {
  if (date) {
    const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    const nowDate = Date.now();

    const year = moment(date).format('YYYY') === moment(nowDate).format('YYYY');
    const month = moment(date).format('MM') === moment(nowDate).format('MM');
    const day = moment(date).format('DD') === moment(nowDate).format('DD');
    if (year && month && day) {
      const hour = moment(date).format('HH');
      const minutes = moment(date).format('mm');
      if (hour === moment(nowDate).format('HH')) {
        const diffM = Math.abs(
          parseInt(moment(nowDate).format('mm')) - parseInt(minutes)
        );

        if (diffM < 1) {
          return 'agora';
        }
        return `${diffM} min atrás`;
      }
      const diffH = Math.abs(
        parseInt(moment(nowDate).format('HH')) - parseInt(hour)
      );
      return `${diffH} hora${diffH > 1 ? 's' : ''} atrás`;
    }
    return formattedDate;
  }
  return null;
};
