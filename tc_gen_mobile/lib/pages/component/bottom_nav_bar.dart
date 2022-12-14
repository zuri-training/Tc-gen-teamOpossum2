import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluentui_icons/fluentui_icons.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:tc_gen_mobile/pages/component/landing_screen.dart';

class BottomBar extends StatefulWidget {
  const BottomBar({super.key});

  @override
  State<BottomBar> createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {
  int _selectedindex = 0;

  static final List<Widget> _widgetOptions = <Widget>[
    LandingScreen(),
    const Text('Contact Us'),
    const Text('About us'),
    const Text('Profile')
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedindex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('TC GENERATOR'),
        backgroundColor: Color.fromRGBO(102, 0, 119, 0.7),
      ),
      body: Center(
        child: _widgetOptions[_selectedindex],
      ),
      bottomNavigationBar: BottomNavigationBar(
          currentIndex: _selectedindex,
          onTap: _onItemTapped,
          elevation: 10,
          showSelectedLabels: false,
          showUnselectedLabels: false,
          selectedItemColor: Color.fromRGBO(102, 0, 119, 0.9),
          unselectedItemColor: Color.fromRGBO(102, 0, 119, 0.5),
          type: BottomNavigationBarType.fixed,
          items: const [
            BottomNavigationBarItem(
                icon: Icon(FluentSystemIcons.ic_fluent_home_add_regular),
                activeIcon: Icon(FluentSystemIcons.ic_fluent_home_add_filled),
                label: "Home"),
            BottomNavigationBarItem(
                icon: Icon(
                    FluentSystemIcons.ic_fluent_contact_card_group_regular),
                activeIcon:
                    Icon(FluentSystemIcons.ic_fluent_contact_card_filled),
                label: "Contact Us"),
            BottomNavigationBarItem(
                icon: Icon(FluentSystemIcons.ic_fluent_location_regular),
                activeIcon: Icon(FluentSystemIcons.ic_fluent_location_filled),
                label: "About Us"),
            BottomNavigationBarItem(
                icon: Icon(FluentSystemIcons.ic_fluent_person_regular),
                activeIcon: Icon(FluentSystemIcons.ic_fluent_person_filled),
                label: "Profile"),
          ]),
    );
  }
}
