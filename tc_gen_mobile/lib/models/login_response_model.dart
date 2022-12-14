import 'dart:convert';

LoginResponseModel loginResponseJson(String str) =>
    LoginResponseModel.fromJson(json.decode(str));

class LoginResponseModel {
  LoginResponseModel({
    required this.user,
    required this.token,
  });
  late final User user;
  late final String token;

  LoginResponseModel.fromJson(Map<String, dynamic> json) {
    user = User.fromJson(json['user']);
    token = json['token'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['user'] = user.toJson();
    _data['token'] = token;
    return _data;
  }
}

class User {
  User({
    required this.username,
    required this.email,
    required this.password,
    required this.createdAt,
    required this.id,
  });
  late final String username;
  late final String password;
  late final String email;
  late final String createdAt;
  late final String id;

  User.fromJson(Map<String, dynamic> json) {
    username = json['username'];
    password = json['password'];
    email = json['email'];
    createdAt = json['createdAt'];
    id = json['_id'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['username'] = username;
    _data['password'] = password;
    _data['email'] = email;
    _data['createdAt '] = createdAt;
    _data['_id'] = id;
    return _data;
  }
}
