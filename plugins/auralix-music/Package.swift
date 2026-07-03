// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "AuralixMusic",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "AuralixMusic",
            targets: ["AuralixMusicPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "AuralixMusicPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AuralixMusicPlugin"),
        .testTarget(
            name: "AuralixMusicPluginTests",
            dependencies: ["AuralixMusicPlugin"],
            path: "ios/Tests/AuralixMusicPluginTests")
    ]
)