import { useRef } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStore } from 'stores';

function useStore(): RootStore {
  const store: any = useRef(MobXProviderContext);
  return store;
}

export default useStore;
