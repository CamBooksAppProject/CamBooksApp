import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 추가
import IMAGES from "../../assets";


export default function ProfileScreen() {
    const navigation = useNavigation(); // useNavigation 훅으로 navigation 객체 가져오기

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={styles.setButton}
                        onPress={() => navigation.navigate("SettingPage")}
                    >
                        <Image
                            source={IMAGES.LOGOV2}
                            style={styles.setImg}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.userContainer}>
                    <Image
                        source={IMAGES.LOGOV2}
                        style={styles.userImg}
                    />
                    <Text style={styles.userText}>어서옵쇼</Text>
                    <View style={styles.locContainer}>
                        <Image
                            source={IMAGES.LOGOV2}
                            style={styles.locImg}
                        />
                        <Text style={styles.adsText}>경기도 용인시 기흥구</Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.backButton}>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.setImg}
                            />
                            <Text style={styles.menuFont}>나의 글 관리</Text>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.nextImg}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.setImg}
                            />
                            <Text style={styles.menuFont}>구매 내역</Text>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.nextImg}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.setImg}
                            />
                            <Text style={styles.menuFont}>판매 내역</Text>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.nextImg}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Image

                                style={styles.setImg}
                            />
                            <Text style={styles.menuFont}>문의하기</Text>
                            <Image
                                source={IMAGES.LOGOV2}
                                style={styles.nextImg}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                <StatusBar style="auto" />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // ScrollView가 화면 전체를 차지하게 설정
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topContainer: {
        width: "100%",
        height: "15%",
        paddingRight: 25, // 오른쪽 패딩을 추가하여 이미지가 오른쪽에 위치하도록 함
        justifyContent: "center", // 수직 가운데 정렬
        alignItems: "flex-end", // 오른쪽 정렬
    },
    setButton: {
        paddingTop: 45,
    },
    userContainer: {
        width: "100%",
        height: "30%",
        justifyContent: "center", // 수직 가운데 정렬
        alignItems: "center", // 수평 가운데 정렬
    },
    locContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    locImg: {
        height: 14,
        width: 14,
        marginTop: 4,
        marginRight: 4,
    },
    userImg: {
        height: 120,
        width: 120,
        marginBottom: 20, // 이미지와 텍스트 사이에 여백 추가
        borderRadius: 60,
        borderWidth: 1, // 테두리 두께 설정
        borderColor: "#ccc", // 테두리 색상 설정
    },
    userText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center", // 텍스트 가운데 정렬
        marginBottom: 10,
    },
    adsText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        color: "#5E5E5E", // 텍스트 가운데 정렬
    },
    menuContainer: {
        width: "100%",
        height: "55%",
        alignItems: "center",
    },
    menuBox: {
        width: "90%",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginTop: 12,
        backgroundColor: "#fff",
    },
    menuFont: {
        fontSize: 16,
    },
    backButton: {
        flexDirection: "row", // 이미지와 텍스트를 가로로 배치
        alignItems: "center", // 이미지와 텍스트를 수직으로 가운데 정렬
        padding: 15, // 패딩 추가로 터치 영역 확대
        borderBottomWidth: 1, // 각 메뉴 항목 아래에 구분선 추가
        borderBottomColor: "#ddd",
    },
    setImg: {
        height: 26,
        width: 26,
        marginRight: 10, // 이미지와 텍스트 사이에 간격 추가
    },
    nextImg: {
        height: 16,
        width: 16,
        marginLeft: "auto", // 아이콘을 오른쪽으로 밀어냄
    },
});