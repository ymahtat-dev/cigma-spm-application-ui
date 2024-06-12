export const API_CONTEXT_URI = '/api';

export const WEB_SERVICE_DOMAINS = {
    AUTH: 'auth',
    MASTERDATA: 'masterdata',
    PROJECTS: 'projects',
};

export const WEB_SERVICE_URI = {
    LOGIN: `${WEB_SERVICE_DOMAINS.AUTH}/login`,
    GET_PROFILE: `${WEB_SERVICE_DOMAINS.AUTH}/profile`,
    GET_MASTERDATA_STATUS_FLOWS: `${WEB_SERVICE_DOMAINS.MASTERDATA}/status-flows`,
    PROJECTS: 'projects',
};


export const PAGES = {
    HOME: 'home',
    ABOUT: 'about',
    LOGIN: 'login',
    ADMIN_WORKS: 'admin-works',
    PROJECT: 'project',
    PROJECT_CREATE: 'project/create',
    PROJECT_EDIT: 'project/:projectId',
    FORBIDDEN_ERROR: 'error/403',
    NOT_FOUND_ERROR: 'error/404',
};

export const PROJECT_TYPES_VALUES = {
    DESIGN: 'design',
    DEVELOPMENT: 'development',
    TESTING: 'testing',
    DEPLOY: 'deployment',
};

export const PROJECT_TYPES_LABELS = {
    DESIGN: 'Design',
    DEVELOPMENT: 'Développement',
    TESTING: 'Test',
    DEPLOY: 'Déploiement',
};

export const TASK_TYPES_OPTIONS = [
    {value: PROJECT_TYPES_VALUES.DESIGN, label: PROJECT_TYPES_LABELS.DESIGN},
    {value: PROJECT_TYPES_VALUES.DEVELOPMENT, label: PROJECT_TYPES_LABELS.DEVELOPMENT},
    {value: PROJECT_TYPES_VALUES.TESTING, label: PROJECT_TYPES_LABELS.TESTING},
    {value: PROJECT_TYPES_VALUES.DEPLOY, label: PROJECT_TYPES_LABELS.DEPLOY},
];

export const PROJECT_STATUS_VALUES = {
    TO_START: 'to_start',
    IN_PROGRESS: 'in_progress',
    FINISHED: 'finished',
    CANCELED: 'canceled',
};

export const PROJECT_STATUS_LABELS = {
    TO_START: 'A démarrer',
    IN_PROGRESS: 'En cours',
    FINISHED: 'Terminé',
    CANCELED: 'Annulé',
};

export const PROJECT_STATUS_OPTIONS = [
    {value: PROJECT_STATUS_VALUES.TO_START, label: PROJECT_STATUS_LABELS.TO_START},
    {value: PROJECT_STATUS_VALUES.IN_PROGRESS, label: PROJECT_STATUS_LABELS.IN_PROGRESS},
    {value: PROJECT_STATUS_VALUES.FINISHED, label: PROJECT_STATUS_LABELS.FINISHED},
    {value: PROJECT_STATUS_VALUES.CANCELED, label: PROJECT_STATUS_LABELS.CANCELED},
];
