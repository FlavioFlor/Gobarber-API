import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.use(authMiddleware);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);
routes.put('/users', UserController.update);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);
routes.get('/appointments', AppointmentController.index);
routes.get('/schedules', ScheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.post('/files', upload.single('File'), FileController.store);

export default routes;
