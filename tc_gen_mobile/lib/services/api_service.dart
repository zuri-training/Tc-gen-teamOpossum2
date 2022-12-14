import 'dart:convert';

import 'package:tc_gen_mobile/models/login_request_model.dart';
import 'package:tc_gen_mobile/models/login_response_model.dart';
import 'package:tc_gen_mobile/models/register_response_model.dart';
import '../models/register_request_model.dart';

import 'package:http/http.dart' as http;

import 'package:tc_gen_mobile/services/shared_service.dart';
import '../config.dart';

class APIService {
  static var client = http.Client();

  static Future<bool> login(LoginRequestModel model) async {
    Map<String, String> requestHeaders = {
      'Content-Type': 'application/json',
    };

    var url = Uri.parse(Config.apiURL + Config.loginAPI);

    var response = await http.post(
      url,
      headers: requestHeaders,
      body: jsonEncode(model.toJson()),
    );

    if (response.statusCode == 200) {
      // Store info in SHARED SERVICE
      await SharedService.setloginDetails(
        loginResponseJson(response.body),
      );
      return true;
    } else {
      return false;
    }
  }

  static Future<RegisterResponseModel> register(
      RegisterRequestModel model) async {
    Map<String, String> requestHeaders = {
      'Content-Type': 'application/json',
    };

    var url = Uri.https(Config.apiURL, Config.registerAPI);

    var response = await client.post(
      url,
      headers: requestHeaders,
      body: jsonEncode(model.toJson()),
    );

    return registerResponseJson(response.body);
  }

  // static Future<String> getUserProfile() async {
  //   var loginDetails = await SharedService.loginDetails();

  //   Map<String, String> requestHeaders = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ${loginDetails!.data.token}'
  //   };

  //   var url = Uri.http(Config.apiURL, Config.userProfileAPI);

  //   var response = await client.get(
  //     url,
  //     headers: requestHeaders,
  //   );

  //   if (response.statusCode == 200) {
  //     return response.body;
  //   } else {
  //     return "";
  //   }
  // }
}
