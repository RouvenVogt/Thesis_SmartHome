var schedule2, schedule1;


on({id: 'shelly.0.SHBTN-1#483FDA6FD1D9#1.Button.Event', change: "any"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  if ((obj.state ? obj.state.val : "") == 'SS') {
    setStateDelayed('yeelight-2.0.color-0x000000000804e1a4.scenen.romantic_lights', true, false, parseInt(0, 10), true);
  }
});

on({id: 'shelly.0.SHBTN-1#483FDA6FD1D9#1.Button.Event', change: "any"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  if ((obj.state ? obj.state.val : "") == 'S') {
    setStateDelayed('hmip.0.devices.3014F711A000201A49953E1B.channels.1.setPointTemperature', parseFloat('10'), false, parseInt(0, 10), true);
  }
});

on({id: '0_userdata.0.Stunde', change: "any"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  console.log('test');
  schedule1 = schedule(getState("0_userdata.0.Minute").val.trim() + ' ' + getState("0_userdata.0.Stunde").val.trim() + ' ' + '*'.trim() + ' ' + '*'.trim() + ' ' + '*'.trim(), function () {
    setStateDelayed('sonoff.0.DVES_134EFD.POWER', true, false, parseInt(0, 10), true);
  });
});

on({id: "0_userdata.0.Minute"/*Minute*/, change: "ne"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  setStateDelayed('0_userdata.0.Stunde', getState("0_userdata.0.Stunde").val, true, parseInt(0, 10), true);
});

schedule2 = schedule('00'.trim() + ' ' + '8'.trim() + ' ' + '*'.trim() + ' ' + '*'.trim() + ' ' + '1'.trim(), function () {
  setStateDelayed('sonoff.0.DVES_134EFD.POWER', true, false, parseInt(0, 10), true);
  setStateDelayed('yeelight-2.0.color-0x000000000804e1a4.control.power', true, false, parseInt(0, 10), true);
  setStateDelayed('hmip.0.devices.3014F711A000201A49953E1B.channels.1.setPointTemperature', parseFloat('20'), false, parseInt(0, 10), true);
});

//JTNDeG1sJTIweG1sbnMlM0QlMjJodHRwcyUzQSUyRiUyRmRldmVsb3BlcnMuZ29vZ2xlLmNvbSUyRmJsb2NrbHklMkZ4bWwlMjIlM0UlM0N2YXJpYWJsZXMlM0UlM0N2YXJpYWJsZSUyMHR5cGUlM0QlMjJjcm9uJTIyJTIwaWQlM0QlMjJzY2hlZHVsZTIlMjIlM0VzY2hlZHVsZTIlM0MlMkZ2YXJpYWJsZSUzRSUzQ3ZhcmlhYmxlJTIwdHlwZSUzRCUyMmNyb24lMjIlMjBpZCUzRCUyMnNjaGVkdWxlMSUyMiUzRXNjaGVkdWxlMSUzQyUyRnZhcmlhYmxlJTNFJTNDJTJGdmFyaWFibGVzJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyb25fZXh0JTIyJTIwaWQlM0QlMjJpdkJ5UmxTX21zU19yLk1zQiU1RCltJTIyJTIweCUzRCUyMjEzJTIyJTIweSUzRCUyMi0xODclMjIlM0UlM0NtdXRhdGlvbiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGh0bWwlMjIlMjBpdGVtcyUzRCUyMjElMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkNPTkRJVElPTiUyMiUzRWFueSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQUNLX0NPTkRJVElPTiUyMiUzRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEMCUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJmaWVsZF9vaWQlMjIlMjBpZCUzRCUyMiU2MHglNURkeCUyNH4lNjBEcClqZFZTKURzJTIzbyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMm9pZCUyMiUzRXNoZWxseS4wLlNIQlROLTElMjM0ODNGREE2RkQxRDklMjMxLkJ1dHRvbi5FdmVudCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyU1RBVEVNRU5UJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbHNfaWYlMjIlMjBpZCUzRCUyMjZQMiUyQlVMZk9sVzRBYnBiei1QdSU1RSUyMiUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMklGMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmxvZ2ljX2NvbXBhcmUlMjIlMjBpZCUzRCUyMnh5JTQwZWRmNSUyM0w4cilaJTI0akQwYiUyQlYlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPUCUyMiUzRUVRJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJBJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyb25fc291cmNlJTIyJTIwaWQlM0QlMjJPZSU1RCUyRjlKJTdDRC1qJTJGJTVFYVglMjVuc3VfTyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFUVFIlMjIlM0VzdGF0ZS52YWwlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJCJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyJTNGRGZtTiUyNTVfJTdCcUolN0QybS1BVmcqVyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0VTUyUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyRE8wJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbF9leCUyMiUyMGlkJTNEJTIyS0drJTNCTWxGemUlNUJNMCU3RE03JTdEUSU0MGRZJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVFlQRSUyMiUzRWZhbHNlJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDTEVBUl9SVU5OSU5HJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIyaE5qYTlKQ3FVISU1RSUzQUVUMmFsMVklN0MlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0V5ZWVsaWdodC0yLjAuY29sb3ItMHgwMDAwMDAwMDA4MDRlMWE0LnNjZW5lbi5yb21hbnRpY19saWdodHMlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybG9naWNfYm9vbGVhbiUyMiUyMGlkJTNEJTIyJTI1SEhxNSUyM096Y21aZmVIQiU1QiUyNTghJTNEJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQk9PTCUyMiUzRVRSVUUlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyREVMQVlfTVMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMiUyNCpxcCFyR2w0NGFZSDJzJTVFZjB3VyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTAlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQyUyRmJsb2NrJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyb25fZXh0JTIyJTIwaWQlM0QlMjJtJTIzYVpnTyE2UCUyQ1dvJTI0SnNSLSUyNXFVJTIyJTIweCUzRCUyMjEzJTIyJTIweSUzRCUyMjE2MiUyMiUzRSUzQ211dGF0aW9uJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4aHRtbCUyMiUyMGl0ZW1zJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ09ORElUSU9OJTIyJTNFYW55JTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBQ0tfQ09ORElUSU9OJTIyJTNFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQwJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIyJTNBKSU1RF9yTUFMJTJCJTIzYiU3RH5lJTJGJTIzc2RzJTNGJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyb2lkJTIyJTNFc2hlbGx5LjAuU0hCVE4tMSUyMzQ4M0ZEQTZGRDFEOSUyMzEuQnV0dG9uLkV2ZW50JTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJTVEFURU1FTlQlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJjb250cm9sc19pZiUyMiUyMGlkJTNEJTIyMDNjNCUzQU5nJTI0Nm5mJTNCMTM1cExmMTElMjIlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJJRjAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJsb2dpY19jb21wYXJlJTIyJTIwaWQlM0QlMjJSa0xOcENwTUYlMkMod18pRVlBY2F+JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT1AlMjIlM0VFUSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyQSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMm9uX3NvdXJjZSUyMiUyMGlkJTNEJTIyJTYwJTNBdTNQbCU3QkRmUDklNUJDTFpsJTVEc3JkJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQVRUUiUyMiUzRXN0YXRlLnZhbCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkIlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjIlMjNJcjRVNCpjeUwlM0FPVCU3Q2xJQiUzRGs5JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRVMlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMkRPMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNvbnRyb2xfZXglMjIlMjBpZCUzRCUyMnYlNUU3JTNBNUVmVyUzRDBPJTdDRkdxcVhuUi0lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJUWVBFJTIyJTNFZmFsc2UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkNMRUFSX1JVTk5JTkclMjIlM0VUUlVFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIyZmllbGRfb2lkJTIyJTIwaWQlM0QlMjIlNDBvJTNBMGVSbEslMkNSRnI3Sl9sQ1JpTiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMm9pZCUyMiUzRWhtaXAuMC5kZXZpY2VzLjMwMTRGNzExQTAwMDIwMUE0OTk1M0UxQi5jaGFubmVscy4xLnNldFBvaW50VGVtcGVyYXR1cmUlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybG9naWNfYm9vbGVhbiUyMiUyMGlkJTNEJTIyNm1SNnQlNUJWJTI1YjRycUUzVyglNUIlM0R0UyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkJPT0wlMjIlM0VUUlVFJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJjb252ZXJ0X3RvbnVtYmVyJTIyJTIwaWQlM0QlMjIlMkZGfkNOZmpuKSU0MCUzRi4lM0FiT0dZYkpOJTIyJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjI3czJIITZrYi4oY1kzbVBhdWFmdSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UxMCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJERUxBWV9NUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyJTJCUk0lM0QlMjV4RlB0LVBUaSglMjQpa21nKiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTAlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQyUyRmJsb2NrJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyb25fZXh0JTIyJTIwaWQlM0QlMjIlN0NmJTI0JTJDUyU1RSU1RGowJTdCZGlSM1BmejclM0ZGJTIyJTIweCUzRCUyMjEyJTIyJTIweSUzRCUyMjUxMiUyMiUzRSUzQ211dGF0aW9uJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4aHRtbCUyMiUyMGl0ZW1zJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ09ORElUSU9OJTIyJTNFYW55JTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBQ0tfQ09ORElUSU9OJTIyJTNFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQwJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIydkVIfi0lM0ElNURxJTYwTDkpKCFJOUF6OGElMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0VkZWZhdWx0JTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJmaWVsZF9vaWQlMjIlMjBpZCUzRCUyMlRuJTVEJTdCTyU3RC4xRDkhJTNENDRTTSp5SWolMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0UwX3VzZXJkYXRhLjAuU3R1bmRlJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMlNUQVRFTUVOVCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmRlYnVnJTIyJTIwaWQlM0QlMjI5VTB+JTVFcDFPJTVFTnAlM0QlMkIyKHglM0IwMDclMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJTZXZlcml0eSUyMiUzRWxvZyUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjIpelU2JTVCbSUzQlQ4c3gqfm1QdiU3QmNIJTdCJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRXRlc3QlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDbmV4dCUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnNjaGVkdWxlX2NyZWF0ZSUyMiUyMGlkJTNEJTIycyU1QkpKJTI1JTYwJTJGOE9YJTdDNXglMkZVJTI1NWRLSSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5BTUUlMjIlM0VzY2hlZHVsZTElM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlNDSEVEVUxFJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX2Nyb24lMjIlMjBpZCUzRCUyMlUlNUIlNDAlNURXamElNDBUN3olNUUlNDA2JTdEcyU1QiUyNSU3Qm4lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDUk9OJTIyJTNFMCUyMDAlMjAqJTIwKiUyMColM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNyb25fYnVpbGRlciUyMiUyMGlkJTNEJTIyTUhXZ3haczJXJTJDZXdUbCUyQnpGMyUyMyU3QiUyMiUzRSUzQ211dGF0aW9uJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4aHRtbCUyMiUyMHNlY29uZHMlM0QlMjJmYWxzZSUyMiUyMGFzX2xpbmUlM0QlMjJmYWxzZSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTElORSUyMiUzRUZBTFNFJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJXSVRIX1NFQ09ORFMlMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyRE9XJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMiU0MEMlMjNpellpcSU3QiUzRFRNVCU3QmRkJTVCd3JuJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRSolM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyTU9OVEhTJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMl9kbUVKVyUyQnJ0YUJDTCUyRjB4diElN0MlMjUlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFKiUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJEQVlTJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMiUzQW5Mfi5CJTI1RyU3RCU2MHBjJTJCJTdDIW4lMjVESCU3QiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UqJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkhPVVJTJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMnFSJTNGR25ZYSUyNCF+YiUzQUJpSkk3JTYwJTNENiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UqJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJnZXRfdmFsdWUlMjIlMjBpZCUzRCUyMlR0aHVSN2xfbS5JJTdCJTdDZ25VMjQlN0NSJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQVRUUiUyMiUzRXZhbCUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT0lEJTIyJTNFMF91c2VyZGF0YS4wLlN0dW5kZSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMk1JTlVURVMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIySSUyM0s3WWdkJTIzJTQwVmI0KEhiJTVCWk5fQiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UqJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJnZXRfdmFsdWUlMjIlMjBpZCUzRCUyMiU1Ql94ZWVmVERPTkFqV3MlMjVLLWMlM0ZTJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQVRUUiUyMiUzRXZhbCUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT0lEJTIyJTNFMF91c2VyZGF0YS4wLk1pbnV0ZSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyU1RBVEVNRU5UJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbF9leCUyMiUyMGlkJTNEJTIyZVk5JTYwJTJGQ3hJcE8lM0ZoVXB5N2p3akslMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJUWVBFJTIyJTNFZmFsc2UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkNMRUFSX1JVTk5JTkclMjIlM0VUUlVFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIyZmllbGRfb2lkJTIyJTIwaWQlM0QlMjI1JTVCJTVCWXVucyUyRiUzQk53RFlCdCU3RFElM0JDTiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMm9pZCUyMiUzRXNvbm9mZi4wLkRWRVNfMTM0RUZELlBPV0VSJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmxvZ2ljX2Jvb2xlYW4lMjIlMjBpZCUzRCUyMiU1QkY5UDlYJTI0QTJjKW8lN0QlM0QlNjAlNUVzX2YlM0ElMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJCT09MJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJERUxBWV9NUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyNWJlSVFVN3J1IS0lMkJDMlElM0Y2Q0JYJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGbmV4dCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDJTJGYmxvY2slM0UlM0NibG9jayUyMHR5cGUlM0QlMjJvbiUyMiUyMGlkJTNEJTIyJTVCenIlNURtRyUyM1RwJTIzJTVFJTdCNiU1RCUyRiUyQmclNUROLiUyMiUyMHglM0QlMjI0MTIlMjIlMjB5JTNEJTIyNTEyJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT0lEJTIyJTNFMF91c2VyZGF0YS4wLk1pbnV0ZSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ09ORElUSU9OJTIyJTNFbmUlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFDS19DT05ESVRJT04lMjIlM0UlM0MlMkZmaWVsZCUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJTVEFURU1FTlQlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJjb250cm9sX2V4JTIyJTIwaWQlM0QlMjJ+QUslNDBDaXRUZ01hJTNBbGlPKmIlMjRMcSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRZUEUlMjIlM0V0cnVlJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDTEVBUl9SVU5OSU5HJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIyZGZLX1dPSyUyQiU3RGNKaiU3QzJzJTdEeGElN0QqJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyb2lkJTIyJTNFc29ub2ZmLjAuRFZFU18xMzRFRkQuUE9XRVIlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIydXREWmtiJTVETiUzQSUyQylETFBtLSU1RHQlMjRiJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyb2lkJTIyJTNFMF91c2VyZGF0YS4wLlN0dW5kZSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmxvZ2ljX2Jvb2xlYW4lMjIlMjBpZCUzRCUyMkh0MiUzQSUzQXJ+emNnVnkoKCUyQzJycyU2MH4lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJCT09MJTIyJTNFRkFMU0UlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmdldF92YWx1ZSUyMiUyMGlkJTNEJTIyNGIlNUVYOFFrbCU3QiU3QnElMkJpKCUzQiU3Q1JpVEYlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFdmFsJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPSUQlMjIlM0UwX3VzZXJkYXRhLjAuU3R1bmRlJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyREVMQVlfTVMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMipXeGcwKUFmdWVjKDFUemlwJTYwXy4lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UwJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDJTJGYmxvY2slM0UlM0NibG9jayUyMHR5cGUlM0QlMjJzY2hlZHVsZV9jcmVhdGUlMjIlMjBpZCUzRCUyMjZEJTQwRnhORy13JTVCTktuaiU1QmxpVmFSJTIyJTIweCUzRCUyMjEyJTIyJTIweSUzRCUyMjExMzclMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOQU1FJTIyJTNFc2NoZWR1bGUyJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJTQ0hFRFVMRSUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJmaWVsZF9jcm9uJTIyJTIwaWQlM0QlMjJTKTkwJTdEJTdCOSUyMzclMkMlMjRHUTAxMjVWS1UlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDUk9OJTIyJTNFKiUyMColMjAqJTIwKiUyMColM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNyb25fYnVpbGRlciUyMiUyMGlkJTNEJTIyT19vMilqaCUyNX4qX28lNDAxQSU2MF9FYjMlMjIlM0UlM0NtdXRhdGlvbiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGh0bWwlMjIlMjBzZWNvbmRzJTNEJTIyZmFsc2UlMjIlMjBhc19saW5lJTNEJTIyZmFsc2UlMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkxJTkUlMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyV0lUSF9TRUNPTkRTJTIyJTNFRkFMU0UlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkRPVyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJWUEttc3Q5YUMlNUJScXRUeiUyRjFrJTJGayUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UxJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMk1PTlRIUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJmZkc0JTQwNlI0JTNGJTYwJTJGUWdFJTNEZyUyQkklNUQyJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRSolM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyREFZUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJLJTNCMlJGd2RMJTVCJTNGejYtJTNEdldHWW1YJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRSolM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIySE9VUlMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyckNYZyUzRC5odWl3NkNwJTVFJTI1JTNBJTNBX1hpJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRTglM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyTUlOVVRFUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJkQzlDc0plJTdCVlVBMVpubGolN0IlNUJOMSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UwMCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMlNUQVRFTUVOVCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNvbnRyb2xfZXglMjIlMjBpZCUzRCUyMktQY04uaE1pKCFpKFo2VVdEb2JQJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVFlQRSUyMiUzRWZhbHNlJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDTEVBUl9SVU5OSU5HJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIyJTVCOUMhTSUzQUpiUyU1QklRUyU2MCU0MC1WUiUyNGYlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0Vzb25vZmYuMC5EVkVTXzEzNEVGRC5QT1dFUiUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJWQUxVRSUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJsb2dpY19ib29sZWFuJTIyJTIwaWQlM0QlMjJZJTJGU2ZEJTJCV2MweiUzRkIlN0RjaCU1RV9yJTVFJTI1JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQk9PTCUyMiUzRVRSVUUlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyREVMQVlfTVMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMiUyQ2slN0JMJTNCOGZSdmhkdHhqJTNGJTNEJTJGNUltJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbF9leCUyMiUyMGlkJTNEJTIyVHpydEJXc04lNDBBKiklMkNILlM0ejQlM0QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJUWVBFJTIyJTNFZmFsc2UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkNMRUFSX1JVTk5JTkclMjIlM0VUUlVFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIyZmllbGRfb2lkJTIyJTIwaWQlM0QlMjJZeEhuYiUyRnZBJTI1ZHRKMk0uVllNZEMlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0V5ZWVsaWdodC0yLjAuY29sb3ItMHgwMDAwMDAwMDA4MDRlMWE0LmNvbnRyb2wucG93ZXIlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybG9naWNfYm9vbGVhbiUyMiUyMGlkJTNEJTIyJTIzUFF3YzYyJTI1UFQtM2ZyJTQwbnFCRGolMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJCT09MJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJERUxBWV9NUyUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyQ3hUJTNBWiU1RUwlMkZOREVPa01uUCUzRiU3RHg5JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbF9leCUyMiUyMGlkJTNEJTIybzkwJTIzejBESSUzQSklNUVIR3EwY1YqUyU3QyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRZUEUlMjIlM0VmYWxzZSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ0xFQVJfUlVOTklORyUyMiUzRVRSVUUlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMk9JRCUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJmaWVsZF9vaWQlMjIlMjBpZCUzRCUyMmRLMCUzQWIoJTNCYnlWS3RYaCUyRn4xJTNBV2QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0VobWlwLjAuZGV2aWNlcy4zMDE0RjcxMUEwMDAyMDFBNDk5NTNFMUIuY2hhbm5lbHMuMS5zZXRQb2ludFRlbXBlcmF0dXJlJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmxvZ2ljX2Jvb2xlYW4lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJCT09MJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udmVydF90b251bWJlciUyMiUyMGlkJTNEJTIyX0F4cHElM0FVOSFFaV9CbyUzRHlWJTVFJTNESSUyMiUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyKCUyMzZfRG5EJTdDVFV4QSUyQm1NTXpfb0QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFMjAlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyREVMQVlfTVMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMmctTFNxJTI1JTNCJTdCfkxjMlN3Zk13IUElMjMlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UwJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGbmV4dCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGbmV4dCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ4bWwlM0U=