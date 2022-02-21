import { Language } from '@locale';
import { ExtractPropTypes, PropType } from 'vue';

export const configProviderProps = {
  locale: {
    type: Object as PropType<Language>,
  },
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
