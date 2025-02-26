import { testInstances, demoInstances, productionInstances, otherProductionInstances } from './instances.js';

const instanceListTest = document.getElementById('instance-list-test');
const instanceListDemo = document.getElementById('instance-list-demo');
const instanceListProduction = document.getElementById('instance-list-production');
const instanceListOther = document.getElementById('instance-list-other');

const AZURE_APP_SERVICE_URL_PREFIX = 'https://portal.azure.com/#@rodekruis.nl/resource/subscriptions/b2d243bd-7fab-4a8a-8261-a725ee0e3b47/resourceGroups/510-121/providers/Microsoft.Web/sites/121-'
const AZURE_DASHBOARD_URL_PREFIX = 'https://portal.azure.com/#@rodekruis.nl/dashboard/arm/subscriptions/b2d243bd-7fab-4a8a-8261-a725ee0e3b47/resourcegroups/510-121/providers/microsoft.portal/dashboards/'

const COLOR_LABEL = '434c5e'
const COLOR_VALUE = '5e81ac'
const COLOR_WEBSITE_UP = 'a3be8c'
const COLOR_WEBSITE_DOWN = 'bf616a'
const COLOR_LOGO = 'fff'
const COLOR_VERSION = 'd8dee9'


const createInstaceList = (instances, listElement) => {
  for (const instance of instances) {
    const instanceElement = createInstanceSection(instance);
    listElement.appendChild(instanceElement);
  }
}

const createInstanceSection = (instance) => {
  const instanceElement = document.createElement('instance');
  instanceElement.classList.add('instance');
  if(instance.isWide) {
    instanceElement.classList.add('is-wide');
  }

  instanceElement.appendChild(createInstanceTitle(instance));
  instanceElement.appendChild(createStatusParagraph(instance));
  instanceElement.appendChild(createVersionsParagraph(instance));

  return instanceElement;
}

const createInstanceTitle = (instance) => {
  const titleElement = document.createElement('h2');
  titleElement.innerText = `${instance.label}${instance.emoji ? ' ' + instance.emoji : ' '}`;
  if (instance.icon) {
    const icon = document.createElement('img');
    icon.src = `./icons/favicon_${instance.icon}.ico`;
    titleElement.appendChild(icon);
  }

  return titleElement;
}

const createStatusParagraph = (instance) => {
  const statusParagraph = document.createElement('p');
  statusParagraph.classList.add('status');

  const azureWebAppAnchorElement = document.createElement('a');
  azureWebAppAnchorElement.href = instance.appServiceResourceURL ? instance.appServiceResourceURL : `${AZURE_APP_SERVICE_URL_PREFIX}${instance.name}`;

  const azureWebAppBadgeElement = document.createElement('img');
  const azureWebAppBadgeURL = instance.serviceURL ? `${instance.serviceURL}/docs` : `${instance.name}.121.global/docs`;
  azureWebAppBadgeElement.src = `https://img.shields.io/website?url=https://${azureWebAppBadgeURL}/&style=flat-square&label=121-service+[${instance.name}]&labelColor=${COLOR_LABEL}&up_color=${COLOR_WEBSITE_UP}&down_color=${COLOR_WEBSITE_DOWN}`;
  azureWebAppAnchorElement.appendChild(azureWebAppBadgeElement);

  statusParagraph.appendChild(azureWebAppAnchorElement);

  if (instance.dashboardId) {
    statusParagraph.appendChild(document.createElement('br'));

    const dashboardAnchorElement = document.createElement('a');
    dashboardAnchorElement.href = `${AZURE_DASHBOARD_URL_PREFIX}${instance.dashboardId}`;

    const dashboardBadgeElement = document.createElement('img');
    dashboardBadgeElement.src = `https://img.shields.io/badge/Dashboard-${instance.label}-${COLOR_VALUE}?style=flat-square&labelColor=${COLOR_LABEL}`;
    dashboardAnchorElement.appendChild(dashboardBadgeElement);

    statusParagraph.appendChild(dashboardAnchorElement);
  }

  statusParagraph.appendChild(document.createElement('br'));

  const logsAnchorElement = document.createElement('a');
  logsAnchorElement.href = `https://121-${instance.logsId ? instance.logsId : instance.name}.scm.azurewebsites.net/api/logs/docker`;

  const logsBadgeElement = document.createElement('img');
  logsBadgeElement.src = `https://img.shields.io/badge/Logs-${instance.label}-${COLOR_VALUE}?style=flat-square&logo=docker&logoColor=${COLOR_LOGO}&labelColor=${COLOR_LABEL}`;
  logsAnchorElement.appendChild(logsBadgeElement);

  statusParagraph.appendChild(logsAnchorElement);


  return statusParagraph;
}

const createVersionsParagraph = (instance) => {
  const versionsParagraph = document.createElement('p');
  versionsParagraph.classList.add('versions');

  const serviceAnchorElement = document.createElement('a');
  const serviceUrl = `https://${instance.serviceURL ? instance.serviceURL : instance.name + '.121.global'}`;
  serviceAnchorElement.href = `${serviceUrl}/docs`;

  const serviceBadgeElement = document.createElement('img');
  serviceBadgeElement.src = `https://img.shields.io/badge/endpoint?url=${serviceUrl}/api/health/version&style=flat-square&label=121-service&color=${COLOR_VERSION}&labelColor=${COLOR_LABEL}`;
  serviceAnchorElement.appendChild(serviceBadgeElement);

  versionsParagraph.appendChild(serviceAnchorElement);

  versionsParagraph.appendChild(document.createElement('br'));

  const portalAnchorElement = document.createElement('a');
  const portalUrl = `https://portal.${instance.portalName ? instance.portalName : instance.name}.121.global`
  portalAnchorElement.href = portalUrl;

  const portalBadgeElement = document.createElement('img');
  portalBadgeElement.src = `https://img.shields.io/badge/endpoint?url=${portalUrl}/VERSION.json&style=flat-square&label=Portal&color=${COLOR_VERSION}&labelColor=${COLOR_LABEL}`;
  portalAnchorElement.appendChild(portalBadgeElement);

  versionsParagraph.appendChild(portalAnchorElement);

  if (!!instance.newPortal) {
  versionsParagraph.appendChild(document.createElement('br'));

    const newPortalAnchorElement = document.createElement('a');
    const newPortalUrl = `https://new.portal.${instance.portalName ? instance.portalName : instance.name}.121.global`
    newPortalAnchorElement.href = newPortalUrl;

    const newPortalBadgeElement = document.createElement('img');
    newPortalBadgeElement.src = `https://img.shields.io/badge/endpoint?url=${portalUrl}/VERSION.json&style=flat-square&label=New.Portal&color=${COLOR_VERSION}&labelColor=${COLOR_LABEL}`;
    newPortalAnchorElement.appendChild(newPortalBadgeElement);

    versionsParagraph.appendChild(newPortalAnchorElement);
  }

  return versionsParagraph;
}

createInstaceList(testInstances, instanceListTest);
createInstaceList(demoInstances, instanceListDemo);
createInstaceList(productionInstances, instanceListProduction);
createInstaceList(otherProductionInstances, instanceListOther);
