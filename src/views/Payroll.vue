<<<<<<< HEAD

<script>
=======
<script setup>
>>>>>>> da9ad0301e9518d00ff2944475cc82040e852c2d
import {ref,computed} from 'vue'
import employees from '@/stores/employee_info.json'
import payslips from '@/stores/payroll_data.json'

const search = ref("")
<<<<<<< HEAD
const selectedEmployee = ref(null)
=======
const selectedEmp = ref(null)
>>>>>>> da9ad0301e9518d00ff2944475cc82040e852c2d
const filteredEmployees = computed(()=>
  employees.filter(emp =>
    emp.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

<<<<<<< HEAD
function selectedEmployeefx(emp){
=======
function selectEmployee(emp){
>>>>>>> da9ad0301e9518d00ff2944475cc82040e852c2d
    const employeePayslips = payslips.filter(p => p.employeeId === emp.employeeId)
    selectedEmployee.value = {...emp,payslips: employeePayslips}
    search.value = ""
}
</script>

<<<<<<< HEAD



<!-- Phoenix -->
<template>


=======
<template>
>>>>>>> da9ad0301e9518d00ff2944475cc82040e852c2d
    <input v-model="search" placeholder="Saerch by name" class="search-input">
    <ul v-if="filteredEmployees.length && !selectedEmployee">
        <li v-for="emp in filteredEmployees" :key="emp.employeeId" class="emp-item">
            {{ emp.name }}-{{ emp.position }}
        </li>
    </ul>

    <div v-if="selectedEmployee" class="employee-card">
        <h2>{{ selectedEmployee.name }}</h2>
        <h3>Payslips</h3>
        <div v-for="slip in selectedEmployee.payslips" :key="slip.month" class="payslip-card">
            <strong>{{ slip.month }}</strong>
            <p>Hours Worked: {{ slip.hoursWorked }}</p>
            <p>Leave Deductions:{{ slip.leaveDeductions }}</p>
            <p><b>Final Salary: R{{ slip.finalSalary }}</b></p>
        </div>
    </div>
<<<<<<< HEAD
</template>




<!-- Zahraa -->
<style>


</style>
=======
</template>
>>>>>>> da9ad0301e9518d00ff2944475cc82040e852c2d
