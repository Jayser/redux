import config from '../config';

export const formatUrl = (path, prefix = 'api') => {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return `http://${ config.apiHost }:${ config.apiPort }/${ prefix }${ adjustedPath }`;
};
