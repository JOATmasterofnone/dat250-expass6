/*
 * This file was generated by the Gradle 'init' task.
 */

plugins {
    `java-library`
    `maven-publish`
}

repositories {
    mavenLocal()
    maven {
        url = uri("https://repo.maven.apache.org/maven2/")
    }
}

dependencies {
    api("org.springframework.boot:spring-boot-starter-web:3.1.0")
    api("com.google.code.gson:gson:2.9.0")
    api("com.squareup.okhttp3:okhttp:4.11.0")
    testImplementation("org.springframework.boot:spring-boot-starter-test:3.1.0")
}

group = "no.hvl.dat250.rest"
version = "0.0.1-SNAPSHOT"
description = "counters and todos"
java.sourceCompatibility = JavaVersion.VERSION_17

publishing {
    publications.create<MavenPublication>("maven") {
        from(components["java"])
    }
}

tasks.withType<JavaCompile>() {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc>() {
    options.encoding = "UTF-8"
}

tasks.named<Test>("test") {
    useJUnitPlatform()
}


