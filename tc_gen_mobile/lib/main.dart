import 'package:flutter/material.dart';
import 'package:tc_gen_mobile/pages/login_page.dart';
import 'package:tc_gen_mobile/pages/register_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      routes: {
        '/': (context) => const LoginPage(),
        '/register': (context) => const RegisterPage(),
      },
    );
  }
}
