import React from 'react';
// import { HttpAgent } from '@dfinity/agent';
// import { Actor, HttpAgent, ActorSubclass } from '@dfinity/agent';
// import { Principal } from '@dfinity/principal';

const LOCAL_CANISTER_ID = 'rno2w-sqaaa-aaaaa-aaacq-cai';
const MAIN_CANISTER_ID = 'a4gq6-oaaaa-aaaab-qaa4q-cai';

// function isLocal(agent?: HttpAgent) {
//   if (!agent) {
//     return;
//   }
//   const hostname = agent['_host'].hostname; // eslint-disable-line
//   return hostname === '127.0.0.1' || hostname.endsWith('localhost');
// }

// let agent: HttpAgent | undefined;
// try {
//   agent = new HttpAgent({});
//   if (isLocal(agent)) {
//     agent.fetchRootKey();
//   }
// } catch (e) {
//   console.error('Unable to fetch root key:', e);
// }

// const isLocal = location.hostname.endsWith('localhost') || location.hostname.endsWith('127.0.0.1')
// console.log(isLocal, location.hostname)////

// const didjs = Actor.createActor(didjs_idl, {
//   agent,
//   canisterId: Principal.fromText(uiCanisterId)
// })

// async function fetchCandidInterface(canisterId) {
//   const common_interface: IDL.InterfaceFactory = ({ IDL }) =>
//     IDL.Service({
//       __get_candid_interface_tmp_hack: IDL.Func([], [IDL.Text], ['query']),
//     });
//   const actor: ActorSubclass = Actor.createActor(common_interface, {
//     agent,
//     canisterId,
//   });
//   const candid_source = await actor.__get_candid_interface_tmp_hack();
//   return candid_source;
// }

// async function didToJs(source) {
//   const js = await didjs.did_to_js(source);
//   if (js === []) {
//     return undefined;
//   }
//   const dataUri =
//     'data:text/javascript;charset=utf-8,' + encodeURIComponent(js[0]);
//   // eslint-disable-next-line no-eval
//   const candid = await eval('import("' + dataUri + '")');
//   return candid;
// }

export interface CandidPropTypes
  extends React.ComponentPropsWithoutRef<'iframe'> {
  principal: string;
  local?: boolean | string;
  candid?: string;
  width?: string;
  height?: string;
}

export function Candid({
  principal,
  candid,
  local = false,
  width = '100%',
  height = '400px',
  src,
  style,
  ...others
}: CandidPropTypes) {
  const uiCanisterUrl = // (local === undefined ? isLocal(agent) : local)
    local
      ? // eslint-disable-line no-constant-condition
        `http://${LOCAL_CANISTER_ID}.${
          typeof local === 'string' ? local : 'localhost:8000'
        }`
      : `https://${MAIN_CANISTER_ID}.raw.ic0.app`;

  const tag = 0; // TODO: manually triggering updates
  const didParam =
    candid && candid.length < 2048 ? encodeURIComponent(btoa(candid)) : '';
  const iframeUrl = `${uiCanisterUrl}/?id=${principal}&tag=${tag}&did=${didParam}`;
  return (
    <iframe
      src={src || iframeUrl}
      style={{ border: 'none', width, height, ...style }}
      {...others}
    />
  );
}
