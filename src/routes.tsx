import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '~/pages/Landing'
import OrphanagesMap from '~/pages/OrphanagesMap'
import Orphanages from '~/pages/Orphanages'
import CreateOrphanage from '~/pages/CreateOrphanage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanages} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
