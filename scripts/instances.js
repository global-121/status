const testInstances = [
  {
    name: 'test',
    label: 'Test',
    emoji: '🚨',
    newPortal: true,
    isWide: true,
  },
  {
    name: 'staging',
    label: 'Staging',
    emoji: '🎭',
    appServiceResourceURL: 'https://portal.azure.com/#@rodekruis.onmicrosoft.com/resource/subscriptions/b2d243bd-7fab-4a8a-8261-a725ee0e3b47/resourceGroups/510-121/providers/Microsoft.Web/sites/121-test/slots/staging',
    newPortal: true,
    isWide: true,
    dashboardId: '5545bd61-9384-42cb-8c0f-e21edc387f92-dashboard',
    logsId: 'test-staging',
  }
]

const demoInstances = [
{
    name: 'demo',
    label: 'Demo',
    emoji: '🖼️',
    newPortal: true,
    isWide: true,
    dashboardId: '29e9faf8-f521-473d-a884-66b0bf667454',
  },
  {
    name: 'training',
    label: 'Training',
    emoji: '🎓',
    newPortal: true,
    isWide: true,
    dashboardId: '515052c9-220b-4c06-adeb-827f809e21e2',
  }
]

const productionInstances = [
  {
    name: 'drc',
    label: 'DRC',
    emoji: '🇨🇩',
    dashboardId: '39015109-d214-4bad-9333-f872e81a86f0-dashboard',
  },
  {
    name: 'eswatini',
    label: 'Eswatini',
    emoji: '🇸🇿',
    dashboardId: '181ff6c6-5665-4fbf-99b2-36d466cebbad-dashboard',
  },
  {
    name: 'ethiopia',
    label: 'Ethiopia',
    emoji: '🇪🇹',
    dashboardId: 'ad8bc1db-2fe3-4eb0-86d1-3154cc0455a5',
  },
  {
    name: 'ethiopia-staging',
    label: 'Ethiopia Staging',
    emoji: '🇪🇹🎭',
    appServiceResourceURL: 'https://portal.azure.com/#@rodekruis.onmicrosoft.com/resource/subscriptions/b2d243bd-7fab-4a8a-8261-a725ee0e3b47/resourceGroups/510-121/providers/Microsoft.Web/sites/121-ethiopia/slots/staging',
    serviceURL: '121-ethiopia-staging.azurewebsites.net',
  },
  {
    name: 'greece',
    label: 'Greece',
    emoji: '🇬🇷',
    dashboardId: '29e9faf8-f521-473d-a884-66b0bf66794a',
  },
  {
    name: 'ivorycoast',
    label: 'Ivory Coast',
    emoji: '🇨🇮',
    dashboardId: '',
  },
  {
    name: 'krcs',
    label: 'Kenya',
    emoji: '🇰🇪',
    newPortal: true,
    dashboardId: '65df5619-95bb-40d7-82f4-81ce280d626d',
  },
  {
    name: 'nlrc',
    label: 'NLRC',
    emoji: '🇳🇱',
    newPortal: true,
  },
  {
    name: 'slovakia',
    label: 'Slovakia',
    emoji: '🇸🇰',
    dashboardId: 'c9dbeedf-353c-4a5a-b6e8-7a8098515c78-dashboard',
  },
  {
    name: 'somalia',
    label: 'Somalia',
    emoji: '🇸🇴',
    dashboardId: '567e9cce-0e03-48a5-94e8-9a6530859b52-dashboard',
  },
  {
    name: 'southafrica',
    label: 'South Africa',
    emoji: '🇿🇦',
    newPortal: true,
    dashboardId: '0e16936f-ef2e-44d8-95ac-33102a289a3b-dashboard',
  },
  {
    name: 'sudan',
    label: 'Sudan',
    emoji: '🇸🇩',
    dashboardId: '49c20805-477e-40ec-b11b-8b96b730d82c-dashboard',
  },
  {
    name: 'zambia',
    label: 'Zambia',
    emoji: '🇿🇲',
    dashboardId: '0c4b66b1-3996-433d-989c-0a95e176c339-dashboard',
  },
]

const otherProductionInstances = [
  {
    name: 'helpachild',
    label: 'Help a Child',
    icon: 'helpachild',
    dashboardId: '79b93580-ceb0-4da7-a946-36f36026e1fa',
  },
  {
    name: 'dorcas-ethiopia',
    label: 'Joint Response Ethiopia',
    icon: 'jrethiopia',
    serviceURL: 'jrethiopia.121.global',
    dashboardId: 'ad8bc1db-2fe3-4eb0-86d1-3154cc0455a5',
    portalName: 'jrethiopia',
  },
]

export { testInstances, demoInstances, productionInstances, otherProductionInstances };
