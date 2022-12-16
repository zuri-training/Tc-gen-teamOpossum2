import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class AboutScreen extends StatefulWidget {
  const AboutScreen({super.key});

  @override
  State<AboutScreen> createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Container(
            child: Padding(
              padding: const EdgeInsets.only(top: 20, left: 10, right: 10),
              child: Column(
                children: [
                  Container(
                    height: MediaQuery.of(context).size.height / 4,
                    child: Image.asset("assets/images/about_us.png",
                        width: MediaQuery.of(context).size.width,
                        height: 100,
                        fit: BoxFit.contain),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 25.0),
                    child: Text(
                      'About Us',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 27,
                          color: Colors.black87),
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.only(top: 15.0, left: 5, right: 5),
                    child: Column(
                      children: [
                        Text(
                          'We at TC Generator, provide customized privacy and TOS for web, Android & IOS app, Facebook App, Twitter developer account, Wordpress, Shopify and lots more.',
                          style: TextStyle(fontSize: 16, height: 1.5),
                          textAlign: TextAlign.justify,
                        ),
                        Padding(
                          padding:
                              const EdgeInsets.only(top: 10.0, bottom: 10.0),
                          child: Text(
                            'We are constantly looking for regulations around the world in order to creat the best and most up to date policies for your business.',
                            style: TextStyle(fontSize: 16, height: 1.5),
                            textAlign: TextAlign.justify,
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(bottom: 10.0),
                          child: Text(
                            'We allow you edit and cutomize manually your policies and also lets you download them on PDF, DOCX, TXT and HTML format.',
                            style: TextStyle(fontSize: 16, height: 1.5),
                            textAlign: TextAlign.justify,
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
