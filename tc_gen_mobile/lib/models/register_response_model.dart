import 'dart:convert';

RegisterResponseModel loginResponseModel(String str) =>
    RegisterResponseModel.fromJson(json.decode(str));

class RegisterResponseModel {
  RegisterResponseModel({
    required this.user,
    required this.token,
  });
  late final User? user;
  late final String token;

  RegisterResponseModel.fromJson(Map<String, dynamic> json) {
    user = json['user'] != null ? User.fromJson(json['user']) : null;
    token = json['token'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['user'] = user!.toJson();
    _data['token'] = token;
    return _data;
  }
}

class User {
  User({
    required this.username,
    required this.password,
    required this.createdAt,
    required this.id,
  });
  late final String username;
  late final String password;
  late final String createdAt;
  late final int id;

  User.fromJson(Map<String, dynamic> json) {
    username = json['username'];
    password = json['password'];
    createdAt = json['createdAt '];
    id = json['_id'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['username'] = username;
    _data['password'] = password;
    _data['createdAt '] = createdAt;
    _data['_id'] = id;
    return _data;
  }
}
