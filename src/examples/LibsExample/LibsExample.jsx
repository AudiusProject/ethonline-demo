import React, { useCallback, useEffect, useRef, useState } from 'react'
import Audius from '@audius/libs'
import { Button } from '@audius/stems'

import './LibsExample.css'

/** @audius/libs Example */

const init = async () => {
  const dataRegistryAddress = '0xC611C82150b56E6e4Ec5973AcAbA8835Dd0d75A2'

  const ethTokenAddress = '0xADEf65C0f6a30Dcb5f88Eb8653BBFe09Bf99864f'
  const ethRegistryAddress = '0xb2be26Ca062c5D74964921B80DE6cfa28D9A36c0'
  const ethProviderUrl = 'https://mainnet.infura.io/v3/d6b566d7eea1408988388c311d5a273a'
  const ethProviderOwnerWallet = '0xe886a1858d2d368ef8f02c65bdd470396a1ab188'

  const libs = new Audius({
    web3Config: Audius.configInternalWeb3(
      dataRegistryAddress,
      ['https://core.poa.network']
    ),
    ethWeb3Config: Audius.configEthWeb3(
      ethTokenAddress,
      ethRegistryAddress,
      ethProviderUrl,
      ethProviderOwnerWallet
    ),
    discoveryProviderConfig: Audius.configDiscoveryProvider(),
    identityServiceConfig: Audius.configIdentityService(
      'https://identityservice.audius.co'
    ),
    creatorNodeConfig: Audius.configCreatorNode(
      'https://creatornode.audius.co'
    )
  })
  await libs.init()
  window.libs = libs
  return libs
}

const LibsExample = () => {
  const [libs, setLibs] = useState(null)
  const [myAccount, setMyAccount] = useState(null)
  const [isSigningIn, setIsSigningIn] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  // Initialize @audius/libs on mount
  useEffect(() => {
    const initLibs = async () => {
      const libs = await init()
      setLibs(libs)

      const user = libs.Account.getCurrentUser()
      if (user) {
        setMyAccount(user)
      }
    }
    initLibs()
  }, [])

  // Sign in handler
  const signIn = useCallback(async () => {
    setIsSigningIn(true)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const { user } = await libs.Account.login(email, password)
    setIsSigningIn(false)
    setMyAccount(user)
  }, [libs])

  // Sign out handler
  const signOut = useCallback(async () => {
    await libs.Account.logout()
    setMyAccount(null)
  }, [libs])

  return (
    <div className="myAccount">
      {libs && !myAccount && !isSigningIn && (
        <div className="signIn">
          <div className="label">Email</div>
          <input ref={emailRef} className="email" />
          <div className="label">Password</div>
          <input ref={passwordRef} type="password" className="password" />

          <Button
            text='Sign In'
            onClick={signIn}
          />
        </div>
      )}
      {isSigningIn && (
        <div>Signing in...</div>
      )}
      {myAccount && (
        <div className="user">
          <div className="name">{myAccount.name}</div>
          <div className="handle">{`@${myAccount.handle}`}</div>
          <div className="wallet">{myAccount.wallet}</div>
          <Button
            text='Sign Out'
            onClick={signOut}
          />
        </div>
      )}
    </div>
  )
}

export default LibsExample
