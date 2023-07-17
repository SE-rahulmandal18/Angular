import  { multiply, log as mathLog } from "./math.util";
import  { calculatedSalary, generatePaySlip, log} from "./employee.service";

export default class Dashboard {
    employeeId;

    createDashboard() {
        multiply(10, 20);
        mathLog();
        calculatedSalary();
        generatePaySlip();
        log();
    }
}

export function logDashboardActivites() {
    console.log("Logged Dashboard Activites!");
}