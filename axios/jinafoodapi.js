import http from "./http-common";

class JinaFoodAPI {
  // Employee
  getAllEmployees() {
    return http.get(`/employee/getall`);
  }
  getEmployeeById(id) {
    return http.get(`/employee/get/${id}`);
  }
  addEmployee(data) {
    return http.post(`/employee/add`, data);
  }
  deleteEmployee(id) {
    return http.post(`/employee/delete/${id}`);
  }
  // Customer
  getAllCustomers() {
    return http.get(`/customer/getall`);
  }
  getCustomerById(id) {
    return http.get(`/customer/get/${id}`);
  }
  addCustomer(data) {
    return http.post(`/customer/add`, data);
  }
  deleteCustomer(id) {
    return http.post(`/customer/delete/${id}`);
  }
  // Order
  getAllOrders() {
    return http.get(`/order/getall`);
  }
  getOrderById(id) {
    return http.get(`/order/get/${id}`);
  }
  addOrder(data) {
    return http.post(`/order/add`, data);
  }
  deleteOrder(id) {
    return http.post(`/order/delete/${id}`);
  }
  // Food
  getAllFoods() {
    return http.get(`/food/getall`);
  }
  getFoodById(id) {
    return http.get(`/food/get/${id}`);
  }
  addFood(data) {
    return http.post(`/food/add`, data);
  }
  deleteFood(id) {
    return http.post(`/food/delete/${id}`);
  }
}
export default new JinaFoodAPI();
