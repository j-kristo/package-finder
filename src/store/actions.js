import api from '@/api.js';
import {GET_PACKAGE_INFO, SEARCH_PACKAGES} from './action.types.js';
import {SET_ITEM, SET_LIST, SET_SIZE} from "@/store/mutation.types";

const API_QUERY_PARAMS = '?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser%20(lite)&x-algolia-application-id=OFCNCOG2CU&x-algolia-api-key=f54e21fa3a2a0160595bb058179bfb1e';

export default {
  [SEARCH_PACKAGES]: ({ commit }, { query, page, hitsPerPage }) => {
    const params = new URLSearchParams();
    params.append('query', query);
    params.append('page', page - 1);
    params.append('hitsPerPage', hitsPerPage);
    params.append('attributesToRetrieve', [
      "deprecated",
      "description",
      "githubRepo",
      "homepage",
      "keywords",
      "license",
      "name",
      "owner",
      "version",
    ]);
    const payload = JSON.stringify({ params: params.toString() });

    return api.post(`/query${API_QUERY_PARAMS}`, payload)
      .then(response => {
        const { hits, nbHits } = response.data;
        commit(SET_LIST, { moduleName: 'packages', list: hits });
        commit(SET_SIZE, { moduleName: 'packages', size: nbHits });
      });
  },

  [GET_PACKAGE_INFO]: ({ commit }, { packageName }) => {
    return api.get(`${packageName}${API_QUERY_PARAMS}`)
      .then(response => {
        commit(SET_ITEM, { moduleName: 'packages', item: response.data });
      });
  },
}
