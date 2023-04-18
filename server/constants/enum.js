exports.GENDER_ENUM = ['MALE', 'FEMALE'];
exports.FOOD_PREF_ENUM = ['VEGETARIAN', 'EGGITARIAN', 'OMNIVARIAN'];
exports.HEALTH_CONCERNS_ENUM = ['DIABETES', 'THYROID', 'AUTOIMMUNE', 'PCOS', 'WEIGHT'];
exports.ROLE_MASTER_ENUM = ['SUPER ADMIN', 'ADMIN', 'PATIENT', 'DOCTOR', 'HEALTH COACH', 'HEALTH MANAGER', 'SALES MANAGER', 'FINANCE MANAGER'];
exports.ROLE_GROUP_ALPHA = ['SUPER ADMIN', 'ADMIN', 'PATIENT', 'DOCTOR', 'HEALTH COACH', 'HEALTH MANAGER'];
exports.PLAN_STATUS = ['not started', 'active', 'paused', 'expired', 'complete'];
exports.APPOINTMENT_TAG = ['Case Review', 'Root Cause', 'Doctor FollowUp', 'Coach Session', 'Coach FollowUp'];
exports.APPOINTMENT_STATUS = ['created', 'booked', 'cancelled', 'complete', 'expired'];
exports.TASK_STATUS = ['active', 'inactive', 'complete'];
exports.TASK_TYPE = ['form', 'report upload'];
exports.DOCUMENT_TYPE = ['patientUpload', 'prescription', 'labRequest', 'labAnalysis', 'foodPlan', 'profileImage']
exports.PATIENT_CONSULTANT_STATUS = ['active', 'inactive'];
exports.ROLE_SERVICE_PROVIDER = ['SUPER ADMIN', 'ADMIN', 'DOCTOR', 'HEALTH COACH', 'HEALTH MANAGER', 'SALES MANAGER', 'FINANCE MANAGER'];
exports.ROLE_SERVICE_RECEIVER = ['PATIENT'];
exports.ROLE_TYPE = ['internal', 'clinic', 'consumer'];
// consumer = patient, all the general public
// clinic: doctor, health manager, health coach, sales manager
// internal: finance manager, admin, super admin
exports.FORM_STATUS = ['draft', 'complete', 'expired'];
exports.EMPLOYEE_ROLES = ["HR", "BA", "DIRECTOR", "ADMIN", "HR-ADMIN", "BA-ADMIN"]